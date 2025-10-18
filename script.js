document.addEventListener('DOMContentLoaded', () => {
  // Only target sections that should animate on scroll
  const animatedSections = document.querySelectorAll('.animate-on-scroll');

  if (animatedSections.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Optional: stop observing after animation for performance
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15, // Trigger when 15% of the section is visible
    rootMargin: '0px 0px -50px 0px' // Optional: trigger slightly before fully in view
  });

  animatedSections.forEach(section => {
    observer.observe(section);
  });
});