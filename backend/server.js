const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// قائمة المسؤولين
const ADMIN_EMAILS = [
  'omohamedsalah55@gmail.com',
  'admin@example.com',  // أضف هنا بريد المسؤول الثاني
  // يمكنك إضافة المزيد من عناوين البريد الإلكتروني هنا
];

// إعداد مرسل البريد الإلكتروني
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// دالة لإرسال البريد الإلكتروني لجميع المسؤولين
async function notifyAllAdmins(mailOptions) {
  try {
    // إرسال البريد لكل مسؤول
    const sendPromises = ADMIN_EMAILS.map(adminEmail => {
      const adminMailOptions = {
        ...mailOptions,
        to: adminEmail
      };
      return transporter.sendMail(adminMailOptions);
    });

    await Promise.all(sendPromises);
    console.log('تم إرسال الإشعارات لجميع المسؤولين بنجاح');
  } catch (error) {
    console.error('خطأ في إرسال الإشعارات للمسؤولين:', error);
    throw error;
  }
}

// مسار التسجيل مع الدفع
app.post('/api/register', async (req, res) => {
  try {
    const { 
      name, 
      email, 
      phone, 
      country, 
      visaType,
      paymentId,
      paymentAmount,
      paymentStatus,
      paymentDate
    } = req.body;

    // إعداد محتوى البريد الإلكتروني للمسؤولين
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      subject: 'تسجيل عميل جديد مع تأكيد الدفع',
      html: `
        <h2>تفاصيل العميل الجديد</h2>
        <p><strong>الاسم:</strong> ${name}</p>
        <p><strong>البريد الإلكتروني:</strong> ${email}</p>
        <p><strong>رقم الهاتف:</strong> ${phone}</p>
        <p><strong>البلد:</strong> ${country}</p>
        <p><strong>نوع التأشيرة:</strong> ${visaType}</p>
        <h3>معلومات الدفع</h3>
        <p><strong>رقم عملية الدفع:</strong> ${paymentId}</p>
        <p><strong>المبلغ:</strong> ${paymentAmount}</p>
        <p><strong>حالة الدفع:</strong> ${paymentStatus}</p>
        <p><strong>تاريخ الدفع:</strong> ${paymentDate}</p>
      `
    };

    // إرسال الإشعارات لجميع المسؤولين
    await notifyAllAdmins(adminMailOptions);

    // إرسال تأكيد للعميل
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'تأكيد التسجيل والدفع',
      html: `
        <h2>مرحباً ${name}</h2>
        <p>شكراً لتسجيلك معنا. تم استلام دفعتك بنجاح.</p>
        <h3>تفاصيل الدفع:</h3>
        <p><strong>رقم عملية الدفع:</strong> ${paymentId}</p>
        <p><strong>المبلغ:</strong> ${paymentAmount}</p>
        <p><strong>تاريخ الدفع:</strong> ${paymentDate}</p>
        <p>سنتواصل معك قريباً لاستكمال إجراءات التأشيرة.</p>
      `
    });

    res.status(200).json({ message: 'تم التسجيل والدفع بنجاح' });
  } catch (error) {
    console.error('خطأ في التسجيل:', error);
    res.status(500).json({ error: 'حدث خطأ أثناء التسجيل' });
  }
});

app.listen(port, () => {
  console.log(`الخادم يعمل على المنفذ ${port}`);
}); 