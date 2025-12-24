const btn = document.getElementById("unwrapBtn");
const wrap = document.getElementById("wrap");
const reveal = document.getElementById("reveal");
const giftBox = document.getElementById("giftBox");

btn.addEventListener("click", () => {
  wrap.classList.add("unwrapped");
  btn.disabled = true;
  btn.textContent = "Unwrapping...";

  setTimeout(() => {
    giftBox.classList.add("hidden");
    reveal.classList.remove("hidden");

    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 }
    });

  }, 800);
});
