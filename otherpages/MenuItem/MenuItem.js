var dropdown = document.getElementsByClassName("dropdown-menu-button");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
  this.classList.toggle("active-select-button");
  var dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.display === "block") {
  dropdownContent.style.display = "none";
  } else {
  dropdownContent.style.display = "block";
  }
  });
}

var menuItem = document.getElementsByClassName("menu-label");
var item ;
for (i = 0; i < menuItem.length; i++) {
  menuItem[i].addEventListener("click", function() {
    var current = document.getElementsByClassName(" active-button");
    if (current.length > 0) { 
      current[0].className = current[0].className.replace(" active-button", "");
    }
    this.classList.toggle("active-button");

  })
}


function myFunction() {
  document.getElementById("mobile-sidenav").style.width = "250px";
  document.getElementById("mobile-sidenav").style.height = "100%";
}

function closeNav(){
  document.getElementById("mobile-sidenav").style.width = "0";
}



/**/
(function() {
  let onpageLoad = localStorage.getItem("theme") || "";
  let element = document.body;
  element.classList.add(onpageLoad);
  document.querySelector('.menu-logo-img').style.display = "none"
  document.querySelector('.menu-logo-darkmood-img').style.display = "block"
  document.querySelector('.menu-mobile-logo-img').style.display = "none"
  document.querySelector('.menu-mobile-nightmoode-logo-img').style.display = "block"
  document.getElementById("theme").textContent =
    localStorage.getItem("theme") || "light";
})();


function themeToggle() {
  let element = document.body;
  element.classList.toggle("dark-theme");

  document.querySelector('.menu-logo-img').style.display = "none"
  document.querySelector('.menu-logo-darkmood-img').style.display = "block"
  document.querySelector('.menu-mobile-logo-img').style.display = "none"
  document.querySelector('.menu-mobile-nightmoode-logo-img').style.display = "block"

  let theme = localStorage.getItem("theme");
  if (theme && theme === "dark-theme") {
    localStorage.setItem("theme", "Change theme");
    document.querySelector('.menu-logo-img').style.display = "block"
    document.querySelector('.menu-logo-darkmood-img').style.display = "none"
    document.querySelector('.menu-mobile-logo-img').style.display = "block"
    document.querySelector('.menu-mobile-nightmoode-logo-img').style.display = "none"
  } else {
    localStorage.setItem("theme", "dark-theme");
    document.querySelector('.menu-logo-img').style.display = "none"
    document.querySelector('.menu-logo-darkmood-img').style.display = "block"
    document.querySelector('.menu-mobile-logo-img').style.display = "none"
    document.querySelector('.menu-mobile-nightmoode-logo-img').style.display = "block"
  }
  document.getElementById("theme").textContent = localStorage.getItem("theme");   
}


