(() => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Small reveal effect; disabled automatically for reduced-motion users.
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const items = document.querySelectorAll(".project, .exploration, .topic, .now-row");
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.animate(
            [{ opacity: 0, transform: "translateY(10px)" }, { opacity: 1, transform: "translateY(0)" }],
            { duration: 500, easing: "cubic-bezier(.2,.7,.2,1)", fill: "forwards" }
          );
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    items.forEach(item => observer.observe(item));
  }
})();
