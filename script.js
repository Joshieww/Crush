const canvas = document.getElementById("flowerCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const flowers = [];
const hearts = [];

const flowerCount = 30;
const heartCount = 15;
const emojis = ["🌸", "💮", "🌷", "🌺"];
const heartEmojis = ["💖", "💞", "💗", "💘"];

class Flower {
  constructor() {
    this.reset();
  }
  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * -canvas.height;
    this.size = Math.random() * 30 + 20;
    this.speed = Math.random() * 2 + 1;
    this.swing = Math.random() * 2;
    this.angle = Math.random() * Math.PI * 2;
    this.emoji = emojis[Math.floor(Math.random() * emojis.length)];
  }
  update() {
    this.y += this.speed;
    this.x += Math.sin(this.angle) * this.swing;
    this.angle += 0.02;
    if (this.y > canvas.height + 50) this.reset();
  }
  draw() {
    ctx.font = `${this.size}px serif`;
    ctx.fillText(this.emoji, this.x, this.y);
  }
}

class Heart {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = canvas.height + Math.random() * 100;
    this.size = Math.random() * 25 + 15;
    this.speed = Math.random() * 1 + 0.5;
    this.emoji = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
  }
  update() {
    this.y -= this.speed;
    if (this.y < -50) {
      this.x = Math.random() * canvas.width;
      this.y = canvas.height + Math.random() * 100;
    }
  }
  draw() {
    ctx.font = `${this.size}px serif`;
    ctx.fillText(this.emoji, this.x, this.y);
  }
}

// Create petals and hearts
for (let i = 0; i < flowerCount; i++) flowers.push(new Flower());
for (let i = 0; i < heartCount; i++) hearts.push(new Heart());

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  flowers.forEach(f => { f.update(); f.draw(); });
  hearts.forEach(h => { h.update(); h.draw(); });
  requestAnimationFrame(animate);
}
animate();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// Surprise Button
document.getElementById('surpriseBtn').addEventListener('click', () => {
  const msg = document.getElementById('extraMessage');
  msg.textContent = "You're my favorite person 🌷💗";
  msg.style.opacity = 1;
});

// Fading final note
setTimeout(() => {
  document.getElementById("finalNote").style.opacity = 1;
}, 10000);
