export function skills() {
  const skills = document.querySelector(".skills");

  function skillObservFunction(entry) {
    const [intersect] = entry;
    if (intersect.isIntersecting) {
      skills.classList.remove("visibility");
      skillObserv.unobserve(skills);
    }
  }

  const skillObserv = new IntersectionObserver(skillObservFunction, {
    root: null,
    threshold: 0.5,
  });

  skillObserv.observe(skills);

  const skillSection = document.querySelector("#skills-section");

  const logos = document.querySelectorAll(".logo");

  function obs1(entry) {
    const [intersect] = entry;
    if (intersect.isIntersecting) {
      logos.forEach((logo) => {
        logo.classList.remove("logo-visibility");
        skillIconObs.unobserve(skillSection);
      });
    }
  }
  const skillIconObs = new IntersectionObserver(obs1, {
    root: null,
    threshold: 0.5,
  });

  skillIconObs.observe(skillSection);
}
