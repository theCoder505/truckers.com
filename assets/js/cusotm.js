// active class on highlighted anchor

// Add active class to the current button (highlight it)
var highlightAnchor = document.getElementById("highlightAnchor");
var links = highlightAnchor.getElementsByClassName("menuLink");
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}


// Mobile menu

const mobileMenu = document.getElementById("mobileMenu");

const mobileMenuClose = document.getElementById("mobileMenuClose");

const mobileMenuShow = document.getElementById("mobileMenuShow");

mobileMenuShow.addEventListener("click", ()=> {
    mobileMenu.style.left = "0px";
});


mobileMenuClose.addEventListener("click", ()=> {
    mobileMenu.style.left = "-300px"
});


