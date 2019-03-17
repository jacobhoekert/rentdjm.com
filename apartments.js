// Menu

function toggleMobileMenu() {

  var menuClasses = document.getElementById("menu").classList;
  var burgerClasses = document.getElementById("burger").classList;

  if (menuClasses.contains("is-active") ) {
     menuClasses.remove("is-active");
     burgerClasses.remove("is-active");
  }
  else {
     menuClasses.add("is-active");
     burgerClasses.add("is-active");
  }

}

// Collapsible

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
coll[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var content = this.nextElementSibling;
  if (content.style.maxHeight){
    content.style.maxHeight = null;
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
  } 
});
}

// Gallery 

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
showDivs(slideIndex += n);
}

function showDivs(n) {
var i;
var x = document.getElementsByClassName("mySlides");
if (n > x.length) {slideIndex = 1} 
if (n < 1) {slideIndex = x.length} ;
for (i = 0; i < x.length; i++) {
  x[i].style.display = "none"; 
}
x[slideIndex-1].style.display = "block"; 
}


