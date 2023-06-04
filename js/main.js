

window.addEventListener("scroll", function () {
  
  var header = this.document.querySelector("header");
  header.classList.toggle("sticky",window.scrollY > 0);
});

// const button = document.querySelector(".mobile-nav-toggle");

// i.addEventListener("click", (event) => {
//   button.textContent = `Click count: ${event.detail}`;
// });




