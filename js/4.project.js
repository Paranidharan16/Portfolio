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

  const ytc = document.querySelector(".ytc");
  const td = document.querySelector(".td");
  const fcd = document.querySelector(".fcd");
  const rps = document.querySelector(".rps");
  const fh = document.querySelector(".fh");
  const cal = document.querySelector(".cal");
  // YouTube Observation

  const youTube = new IntersectionObserver(youTubeFunction, {
    root: null,
    threshold: 0.7,
  });
  function youTubeFunction(entry) {
    const [data] = entry;
    if (data.isIntersecting) {
      ytc.classList.remove("blur");
      youTube.unobserve(ytc);
    }
  }
  youTube.observe(ytc);

  // Todo-List Observaton

  const todoList = new IntersectionObserver(todoFunction, {
    root: null,
    threshold: 0.7,
  });
  function todoFunction(entry) {
    const [data] = entry;
    if (data.isIntersecting) {
      td.classList.remove("blur");
      todoList.unobserve(td);
    }
  }
  todoList.observe(td);

  // Fetch-Country-Data Observation

  const fetchCountryData = new IntersectionObserver(fetchCountryDataFunction, {
    root: null,
    threshold: 0.7,
  });
  function fetchCountryDataFunction(entry) {
    const [data] = entry;
    if (data.isIntersecting) {
      fcd.classList.remove("blur");
      fetchCountryData.unobserve(fcd);
    }
  }
  fetchCountryData.observe(fcd);

  // Rock-Paper-Sisor Observation

  const rock = new IntersectionObserver(rockFunction, {
    root: null,
    threshold: 0.7,
  });
  function rockFunction(entry) {
    const [data] = entry;
    if (data.isIntersecting) {
      rps.classList.remove("blur");
      rock.unobserve(rps);
    }
  }
  rock.observe(rps);

  // Fresh-Happiness observation

  const fresh = new IntersectionObserver(freshFunction, {
    root: null,
    threshold: 0.7,
  });
  function freshFunction(entry) {
    const [data] = entry;
    if (data.isIntersecting) {
      fh.classList.remove("blur");
      fresh.unobserve(fh);
    }
  }
  fresh.observe(fh);

  // Calculator observation

  const calculator = new IntersectionObserver(calFunction, {
    root: null,
    threshold: 0.7,
  });
  function calFunction(entry) {
    const [data] = entry;
    if (data.isIntersecting) {
      cal.classList.remove("blur");
      calculator.unobserve(cal);
    }
  }
  calculator.observe(cal);
}
