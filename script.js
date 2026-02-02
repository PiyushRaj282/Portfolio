const texts = [
  "Full Stack Developer",
  "Data Science Enthusiast",
  "AI / ML Engineer"
];

let count = 0;
let index = 0;

function typeEffect() {
  const current = texts[count % texts.length];
  const text = current.slice(0, index++);

  document.querySelector(".typing").textContent = text;

  if (text.length === current.length) {
    setTimeout(() => (index = 0, count++), 1200);
  }
}

setInterval(typeEffect, 150);
