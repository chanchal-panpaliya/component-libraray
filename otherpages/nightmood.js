(function() {
  let onpageLoad = localStorage.getItem("theme") || "";
  let element = document.body;
  element.classList.add(onpageLoad);
  document.querySelector('.img-logo').style.display = "none"
  document.querySelector('.logo-nightmode').style.display = "block"
  document.getElementById("theme").style.color="black";
  document.getElementById("theme").textContent =
    localStorage.getItem("theme") || "light";
})();


function themeToggle() {
  let element = document.body;
  element.classList.toggle("dark-theme");

  document.querySelector('.img-logo').style.display = "none"
  document.querySelector('.logo-nightmode').style.display = "block"
  document.getElementById("theme").style.color="black";

  let theme = localStorage.getItem("theme");
  if (theme && theme === "dark-theme") {
    localStorage.setItem("theme", "Change theme");
    document.querySelector('.img-logo').style.display = "block"
    document.querySelector('.logo-nightmode').style.display = "none"
    document.getElementById("theme").style.color="white";
  } else {
    localStorage.setItem("theme", "dark-theme");
    document.querySelector('.img-logo').style.display = "none"
    document.querySelector('.logo-nightmode').style.display = "block"
    document.getElementById("theme").style.color="black";
  }
  document.getElementById("theme").textContent = localStorage.getItem("theme");   
}
