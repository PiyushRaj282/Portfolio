function revealSections() {
  const sections = document.querySelectorAll('main section');
  const trigger = window.innerHeight * 0.92;
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < trigger) {
      section.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', revealSections);
window.addEventListener('DOMContentLoaded', revealSections);