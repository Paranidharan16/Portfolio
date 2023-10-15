export function contact() {
  const contact = document.querySelector(".contact-title");

  function contactObservFunction(entry) {
    const [intersect] = entry;
    if (intersect.isIntersecting) {
      contact.classList.remove("visibility");
      contactObserv.unobserve(project);
    }
  }

  const contactObserv = new IntersectionObserver(contactObservFunction, {
    root: null,
    threshold: 0.6,
  });

  contactObserv.observe(contact);

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
