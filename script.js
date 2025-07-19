function revealMessage() {
  const msg = document.getElementById("msg");
  const btn = document.getElementById("revealBtn");

  msg.style.display = "block";
  btn.style.display = "none";

  // Confetti burst in center
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });

  // Side bursts
  confetti({
    particleCount: 50,
    angle: 60,
    spread: 55,
    origin: { x: 0, y: 0.5 }
  });

  confetti({
    particleCount: 50,
    angle: 120,
    spread: 55,
    origin: { x: 1, y: 0.5 }
  });

  // Falling confetti stream
  let duration = 3 * 1000;
  let animationEnd = Date.now() + duration;
  let defaults = { startVelocity: 20, spread: 360, ticks: 60, zIndex: 0 };

  let interval = setInterval(() => {
    let timeLeft = animationEnd - Date.now();
    if (timeLeft <= 0) {
      clearInterval(interval);
    }
    confetti(Object.assign({}, defaults, {
      particleCount: 10,
      origin: {
        x: Math.random(),
        y: Math.random() - 0.2
      }
    }));
  }, 200);
}
