// ملف جافاسكريبت لموقع location
// كراء السيارات والشقق المفروشة بمدينة العيون

document.addEventListener('DOMContentLoaded', () => {
  console.log("موقع location جاهز للعمل!");

  // تمرير سلس للروابط الداخلية
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // مثال: رسالة تنبيه عند إرسال النموذج
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      alert("تم إرسال رسالتك بنجاح! سنتواصل معك قريبًا.");
      form.reset();
    });
  }
});
