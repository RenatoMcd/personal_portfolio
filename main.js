const navToggle = document.querySelector(".mobile-nav-toggle"),
primaryNav = document.querySelector(".primary-navigation"),
hamburgerIcon = document.querySelector(".icon-hamburger"),
closeIcon = document.querySelector(".icon-close");

navToggle.addEventListener('click', () => {
  primaryNav.hasAttribute('data-visible') 
    ? navToggle.setAttribute("aria-expanded", false)
    : navToggle.setAttribute("aria-expanded", true);
  primaryNav.toggleAttribute('data-visible');
  hamburgerIcon.classList.toggle('visually-hidden')
  closeIcon.classList.toggle('visually-hidden')
});

$(".primary-navigation > ul > li").click(function(){
  $(".primary-navigation > ul > li").removeClass("active");
  $(this).addClass('active');
});

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("primary-header").style.top = "0";
  } else {
    document.getElementById("primary-header").style.top = "-5rem";
  }
  prevScrollpos = currentScrollPos;
}