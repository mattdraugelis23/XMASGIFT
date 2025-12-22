const btn = document.getElementById("unwrapBtn");
const wrap = document.getElementById("wrap");
const coupon = document.getElementById("coupon");

btn.addEventListener("click", () => {
  wrap.classList.add("unwrapped");
  btn.style.display = "none";

  setTimeout(() => {
    document.getElementById("gift").style.display = "none";
    coupon.classList.remove("hidden");
  }, 700);
});
