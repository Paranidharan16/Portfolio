export function project() {
  const project = document.querySelector(".project-title");

  function projectObservFunction(entry) {
    const [intersect] = entry;
    if (intersect.isIntersecting) {
      project.classList.remove("visibility");
      projectObserv.unobserve(project);
    }
  }

  const projectObserv = new IntersectionObserver(projectObservFunction, {
    root: null,
    threshold: 0.6,
  });

  projectObserv.observe(project);
}

const allProject = document.querySelectorAll(".pro");
allProject.forEach((e) => {
  function all(entry) {
    const [data] = entry;
    if (data.isIntersecting) {
      data.target.classList.remove("blur");
      obs.unobserve(e);
    }
  }
  const obs = new IntersectionObserver(all, {
    root: null,
    threshold: 0.7,
  });
  obs.observe(e);
});
