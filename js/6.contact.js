export function contact() {
  const contactSection = document.querySelector("#contact-section");
  const contactIcon = document.querySelector(".contact-icon");

  const contactObs = new IntersectionObserver(contactFunction, {
    root: null,
    threshold: 0.7,
  });

  function contactFunction(entry) {
    const [data] = entry;

    if (data.isIntersecting) contactIcon.classList.remove("hide");
  }

  contactObs.observe(contactSection);
}
