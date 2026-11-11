/* ==============================
   SCROLL PROGRESS
============================== */

const progressBar = document.getElementById("progressBar");

function updateProgress() {
  const scrollTop = window.scrollY;
  const pageHeight =
    document.documentElement.scrollHeight - window.innerHeight;

  const progress = pageHeight > 0
    ? (scrollTop / pageHeight) * 100
    : 0;

  progressBar.style.width = progress + "%";
}

window.addEventListener("scroll", updateProgress);
updateProgress();


/* ==============================
   BACK TO TOP
============================== */

const backTop = document.getElementById("backTop");

window.addEventListener("scroll", () => {
  backTop.classList.toggle("visible", window.scrollY > 500);
});

backTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


/* ==============================
   FAQ ACCORDION
============================== */

document.querySelectorAll(".faq-question").forEach(button => {
  button.addEventListener("click", () => {
    const currentItem = button.closest(".faq-item");
    const isActive = currentItem.classList.contains("active");

    document.querySelectorAll(".faq-item").forEach(item => {
      item.classList.remove("active");
      item.querySelector(".faq-question")
        .setAttribute("aria-expanded", "false");
    });

    if (!isActive) {
      currentItem.classList.add("active");
      button.setAttribute("aria-expanded", "true");
    }
  });
});


/* ==============================
   REVEAL ANIMATION
============================== */

const revealElements = document.querySelectorAll(
  "section .card, section .advantage-card, " +
  ".hero-feature, .product-card, .stat, " +
  ".trend-other-item, .gps-subitem"
);

revealElements.forEach(element => {
  element.classList.add("reveal");
});

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12
  });

  revealElements.forEach(element => observer.observe(element));
} else {
  revealElements.forEach(element => element.classList.add("show"));
}