

window.addEventListener("scroll", function () {
  
  var header = this.document.querySelector("header");
  header.classList.toggle("sticky",window.scrollY > 0);
});

// const button = document.querySelector(".mobile-nav-toggle");

// i.addEventListener("click", (event) => {
//   button.textContent = `Click count: ${event.detail}`;
// });

const hambuger = document.querySelector(".hamburger");

const navList=document.querySelector(".nav-list")

hambuger.addEventListener("clicked", () => {
  hambuger.classList.toggle("active");
  navList.classList.toggle("active");
})

document.querySelectorAll(".navList").forEach(n =>
  n.addEventListener("clicked", () => {
    hambuger.classList.remove("active");
    navList.classList.remove("active");
  }))
