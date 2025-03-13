// Sticky NavBar
const headerEL = document.querySelector("header");
const aboutContainer = document.getElementById("about");
console.log(headerEL.offsetHeight);

window.addEventListener("scroll", () => {
  if (window.scrollY > aboutContainer.offsetTop - headerEL.offsetHeight - 50) {
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
      "linear-gradient(135deg,rgb(34, 34, 71) 0%,rgb(9, 15, 32) 50%,rgb(14, 24, 36) 100%)";
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

document.addEventListener(function () {
  fetch("projects.json")
    .then((response) => response.json())
    .then((data) => displayProjects(data));
});

function displayProjects(projects) {
  const projectList = document.getElementById("project-list");
  projectList.innerHTML = "";
}

project.forEach((project) => {
  const projectCard = document.createElement("div");
  projectCard.classList.add("project-card", project.catergory);

  projectCard.innerHTML = `
  <h3>${project.title}</h3>
  <p>${project.description}</p>
  <a href="${project.link}" target="blank">View Projects</a>`;

  projectList.appendChild(projectCard);
});
