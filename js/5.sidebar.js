export function sidebar() {
  const close = document.querySelector(".close");
  const sideBar = document.querySelector(".sidebar");
  const toggle = document.querySelector(".toggle");
  toggle.addEventListener("click", () => {
    sideBar.style.marginLeft = "0";
  });

  close.addEventListener("click", () => {
    sideBar.style.marginLeft = "-100%";
  });

  document.addEventListener("keydown", (key) => {
    if (key.key === "Escape") sideBar.style.marginLeft = "-100%";
  });
}
