// Sticky NavBar

document.addEventListener("DOMContentLoaded", function () {
  const headerEL = document.querySelector("header");

  console.log(headerEL.offsetHeight);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      headerEL.classList.add("active");
    } else {
      headerEL.classList.remove("active");
    }
  });

  // Dark Mode
  const inputEl = document.querySelector(".input");
  const bodyEL = document.querySelector("body");
  inputEl.checked = JSON.parse(localStorage.getItem("mode"));

  updateBody();

  function updateBody() {
    if (inputEl.checked) {
      bodyEL.style.background =
        "linear-gradient(135deg,rgb(5, 10, 63) 10%,rgb(48, 9, 37) 50%, #100d0f 100%)";
    } else {
      bodyEL.style.background =
        "linear-gradient(135deg, #21151f 10%, #d227a4 50%, #100d0f 100%)";
    }
  }

  inputEl.addEventListener("input", () => {
    updateBody();
    updateLocalStorage();
  });

  function updateLocalStorage() {
    localStorage.setItem("mode", JSON.stringify(inputEl.checked));
    console.log("Dark mode stored value:", localStorage.getItem("mode"));
  }
  // responsive menu

  const navLinks = document.getElementById("nav-links");
  navLinks.style.maxHeight = "0px";

  function toggleMenu() {
    if (navLinks.style.maxHeight == "0px") {
      navLinks.style.maxHeight = "100vh";
    } else {
      navLinks.style.maxHeight = "0px";
    }
  }

  // Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Scroll to Top
  const scrolltoTopBtn = document.createElement("button");
  scrolltoTopBtn.innerText = "Scroll to Top";
  scrolltoTopBtn.classList.add("scroll-to-top");
  document.body.appendChild(scrolltoTopBtn);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrolltoTopBtn.style.display = "block";
    } else {
      scrolltoTopBtn.style.display = "none";
    }
  });

  scrolltoTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // Projects
  const projects = [
    {
      title: "Rotating Image Gallery",
      description: "An interactive image gallery with a rotating effect.",
      img: "Images/Thumbnail.png",
      link: "#",
    },
    {
      title: "Dark Mode Toggle",
      description: "A simple dark mode toggle button using JavaScript.",
      link: "https://github.com/rainakallan/Projects/tree/main/DarkModeToggle",
    },

    {
      title: "Digital Clock",
      description: "A digital clock displaying real-time updates.",
      link: "https://github.com/rainakallan/Projects/tree/main/Digital%20Clock",
    },

    {
      title: "Personal Portfolio",
      description: "A modern and responsive portfolio website.",
      link: "https://github.com/dashboard",
    },
  ];

  const projectList = document.getElementById("project-list");
  projects.forEach((project) => {
    const projectItem = document.createElement("div");
    projectItem.classList.add("project-item");
    projectItem.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <img src= "${project.img}" alt"${project.title}" class="project-img" >
    <a href="${project.link}" target="_blank">View Project</a>`;

    projectList.appendChild(projectItem);
  });
});
