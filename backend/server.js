const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const multer = require('multer');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// إعداد multer للتعامل مع الملفات
const upload = multer({ dest: 'uploads/' });

// التحقق من وجود المتغيرات البيئية المطلوبة
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
  console.error('خطأ: المتغيرات البيئية EMAIL_USER و EMAIL_PASS مطلوبة');
  process.exit(1);
}

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// قائمة المسؤولين
const ADMIN_EMAILS = [
  'omohamedsalah55@gmail.com',
  'admin@example.com',
];

// إعداد مرسل البريد الإلكتروني
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// التحقق من اتصال البريد الإلكتروني
transporter.verify(function(error, success) {
  if (error) {
    console.error('خطأ في إعداد البريد الإلكتروني:', error);
  } else {
    console.log('تم إعداد البريد الإلكتروني بنجاح');
  }
});

// دالة لإرسال البريد الإلكتروني لجميع المسؤولين
async function notifyAllAdmins(mailOptions) {
  try {
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
app.post('/api/register', upload.single('paymentReceipt'), async (req, res) => {
  try {
    console.log('تم استلام طلب جديد:', req.body);
    console.log('الملف المرفق:', req.file);

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

    // التحقق من البيانات المطلوبة
    if (!name || !email || !phone || !country || !visaType || !paymentId || !paymentAmount) {
      return res.status(400).json({ 
        error: 'جميع الحقول مطلوبة',
        missingFields: {
          name: !name,
          email: !email,
          phone: !phone,
          country: !country,
          visaType: !visaType,
          paymentId: !paymentId,
          paymentAmount: !paymentAmount
        }
      });
    }

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
        ${req.file ? `<p><strong>صورة وصل الدفع:</strong> تم استلام الصورة</p>` : ''}
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
    res.status(500).json({ 
      error: 'حدث خطأ أثناء التسجيل',
      details: error.message
    });
  }
});

app.listen(port, () => {
  console.log(`الخادم يعمل على المنفذ ${port}`);
}); 