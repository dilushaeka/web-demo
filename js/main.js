

window.addEventListener("scroll", function () {
  
  var header = this.document.querySelector("header");
  header.classList.toggle("sticky",window.scrollY > 0);
});


//=======================================================================================
const hambuger = document.querySelector(".hamburger");

const navList= document.querySelector(".navbar")

hambuger.addEventListener("clicked", () => {
  hambuger.classList.toggle("active");
  navList.classList.toggle("active");

});

document.querySelectorAll(".navList").forEach(n =>
  n.addEventListener("clicked", () => {
    hambuger.classList.remove("active");
    navList.classList.remove("active");
  }));

// nav list view
$(".hamburger").on("click", () => {
    var element = document.getElementsByClassName('nav-item');
    console.log(element);
    for (let i = 0; i <6 ; i++) {
        element[i].style.display = 'block';
    }

});

// home page my jobfiels
var typed2 = new Typed('.multiple-context', {
    strings: ['Web Developer <i>Designer</i> ', 'Full <strong>Stack</strong> Developer', 'Volunteer'],
    typeSpeed: 10,
    backSpeed: 100,
    backDelay:1500,
    fadeOut: true,
    loop: true
});

//after active navbar itams

$(document).ready(function(){

    $('.nav-list a').click(function(){
        $('.nav-list a').removeClass('highlight');
        $(this).addClass('highlight');
    });

});

//  after type auto send email
function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "dilushaeka99@gmail.com",
        Password : "A6E64C6F4677BF6AB15344C1329019AE295A",
        To : 'dilushaeka99@gmail.com',
        From :document.getElementById("mailInput").value,
        Subject : document.getElementById("subject").value,
        Body : document.getElementById("message").value
    }).then(
        message => alert(message)
    );
}