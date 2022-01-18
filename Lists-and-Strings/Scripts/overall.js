var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

var navexp = document.querySelector('.nav-expand');
var navexp2 = document.querySelector('.nav-expand2');

function navExpand() {
  if(navexp2.style.display === "block") {
  navexp2.style.display = "none";
  } else {
      navexp2.style.display = "block";
      navexp.style.display = "none;"
  }
  
}

navExpand();