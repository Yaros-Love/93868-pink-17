var navMain = document.querySelector(".main-nav");
var menuToggle = document.querySelector(".main-nav__toggle");
var pageHeader = document.querySelector(".page-header");

navMain.classList.remove("main-nav--nojs");
navMain.classList.remove("main-nav--opened");
navMain.classList.add("main-nav--closed");
pageHeader.classList.remove("page-header--nojs");

menuToggle.addEventListener("click", function(){
  if(navMain.classList.contains("main-nav--closed")){
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
    pageHeader.classList.add("page-header--nojs")
  } else {
    navMain.classList.remove("main-nav--opened");
    navMain.classList.add("main-nav--closed");
    pageHeader.classList.remove("page-header--nojs")
  }
});
