function startFloating() {
  const bubbles = document.querySelectorAll(".hero__gif-block__message");

  bubbles.forEach((bubble) => {
    let phase = Math.random() * Math.PI * 2; 
    let amplitude = 1 + Math.random(); 
    let speed = 0.1 + Math.random() * 1.2; 


    let baseRotation = 0;
    if (bubble.dataset.rotation) {
      baseRotation = Number(bubble.dataset.rotation);
    }

    let baseX = "0";
    if (bubble.id === "followers") {
      baseX = "-50%";
    }

    function animate() {
      phase = phase + 0.02 * speed;
      let offsetY = Math.sin(phase) * amplitude;

      let moveX = `translateX(${baseX})`;
      let moveY = `translateY(${offsetY}px)`;
      let rotate = `rotate(${baseRotation}deg)`;

      bubble.style.transform = moveX + " " + moveY + " " + rotate;

      requestAnimationFrame(animate);
    }

    animate();
  });
}

document.body.addEventListener("htmx:afterSwap", (event) => {
  const hasMessages = event.target.querySelector(".hero__gif-block__message");
  if (hasMessages) {
    startFloating();
  }
});
