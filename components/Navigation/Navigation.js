function Open_desktop_NavBar(){
    var x = document.getElementsByClassName("desktop-nav-bar-list")[0];
    if (x.className === "desktop-nav-bar-list") {
        x.className += " responsive";
      } else {
        x.className = "desktop-nav-bar-list";
      }

}