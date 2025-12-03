// Toggle navigation menu on mobile
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");

  if (navToggle) {
    navToggle.addEventListener("click", () => {
      const expanded = nav.getAttribute("aria-expanded") === "true";
      nav.setAttribute("aria-expanded", !expanded);
    });
  }
});

// Optional: Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");

  if (navToggle) {
    navToggle.addEventListener("click", () => {
      const expanded = nav.getAttribute("aria-expanded") === "true";
      nav.setAttribute("aria-expanded", !expanded);

      // تغيير رمز الزر بين ☰ و ✖
      navToggle.textContent = expanded ? "☰" : "✖";
    });
  }

  // إغلاق القائمة عند الضغط على أي رابط
  document.querySelectorAll(".nav-list a").forEach(link => {
    link.addEventListener("click", () => {
      nav.setAttribute("aria-expanded", false);
      navToggle.textContent = "☰";
    });
  });
});
