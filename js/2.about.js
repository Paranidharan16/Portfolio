export function about() {
  const one = document.querySelector(".one");
  const two = document.querySelector(".two");
  const three = document.querySelector(".three");
  const four = document.querySelector(".four");
  const five = document.querySelector(".five");
  const six = document.querySelector(".six");
  const blink = document.querySelector(".blink");

  setTimeout(() => {
    one.classList.remove("hidden");
  }, 1000);

  setTimeout(() => {
    two.classList.remove("hidden");
  }, 1200);

  setTimeout(() => {
    three.classList.remove("hidden");
  }, 1400);

  setTimeout(() => {
    four.classList.remove("hidden");
  }, 1600);

  setTimeout(() => {
    five.classList.remove("hidden");
  }, 1800);
  setTimeout(() => {
    six.classList.remove("hidden");
  }, 2000);

  setInterval(() => {
    blink.classList.toggle("opacity");
  }, 400);
}
