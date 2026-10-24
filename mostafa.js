function submitBooking(event) {
  event.preventDefault();

  // 1. تجميع البيانات من الفيلدز
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const service = document.getElementById('service').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;

  // 👈 اكتب رقم الواتساب بتاعك هنا بكود الدولة (مثلاً لمصر: 201200000000)
  const myPhoneNumber = "01069343356"

  // 2. تجهيز رسالة الواتساب
  const message = `💈 *حجز جديد في الصالون* 💈%0A%0A` +
                  `👤 *الاسم:* ${name}%0A` +
                  `📱 *الرقم:* ${phone}%0A` +
                  `✂️ *الخدمة:* ${service}%0A` +
                  `📅 *التاريخ:* ${date}%0A` +
                  `⏰ *الوقت:* ${time}`;

  // 3. فتح الواتساب تلقائياً لإرسال التفاصيل ليك
  const whatsappUrl = `https://wa.me/${myPhoneNumber}?text=${message}`;
  
  alert("تم تسجيل البيانات! سيتم تحويلك للواتساب لتأكيد الحجز مع الصالون 🚀");
  window.open(whatsappUrl, '_blank');
}