const translate = document.querySelectorAll(".translate");
const header = document.querySelector("header");
const section = document.querySelector("section");

let header_height = header.offsetHeight;
let section_height = section.offsetHeight;

window.addEventListener("scroll", () => {
  let scroll = window.pageYOffset;
  let sectionY = section.getBoundingClientRect();

  translate.forEach((element) => {
    let speed = element.dataset.speed;
    element.style.transform = `translateY(${scroll * speed}px)`;
  });
});
