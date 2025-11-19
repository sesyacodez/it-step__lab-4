function startFloating() {
  const bubbles = document.querySelectorAll(".hero__gif-block__message");

  bubbles.forEach((bubble) => {
    const amplitude = 1 + Math.random() * 1;
    const speed = 0.1 + Math.random() * 1.2;
    let phase = Math.random() * Math.PI * 2;

    const baseRotation = bubble.dataset.rotation || 0;

    const animate = () => {
      phase += 0.02 * speed;
      const offset = Math.sin(phase) * amplitude;

      const baseX = bubble.id === "followers" ? "-50%" : "0";

      bubble.style.transform = `translateX(${baseX}) translateY(${offset}px) rotate(${baseRotation}deg)`;
      requestAnimationFrame(animate);
    };

    animate();
  });
}

document.body.addEventListener("htmx:afterSwap", (event) => {
  if (event.target.querySelector(".hero__gif-block__message")) {
    startFloating();
  }
});
