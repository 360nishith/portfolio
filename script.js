document.getElementById("year").textContent = new Date().getFullYear();

const cards = document.querySelectorAll(".project-card, .skill-group, .timeline-item");

const reveal = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        reveal.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

cards.forEach((card) => reveal.observe(card));
