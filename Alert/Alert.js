var showalert_example = document.getElementById("showalert_example");

showalert_example.addEventListener("click",()=>{
    document.getElementById("alert_example").style.display = "block"
})

var close_alert = document.getElementById("close_alert");

close_alert.addEventListener("click",()=>{
     document.getElementById("alert_example").style.display = "none"

})


var close = document.getElementsByClassName("close_action_alert");

var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function(){
    var div = this.parentElement;
    div.style.opacity = "0";
    setTimeout(function(){ div.style.display = "none"; }, 600);
  }
}



function reload_action_alert(){
  var reload = document.getElementsByClassName("action_alert");

  var j;
   for (j = 0; j < close.length; j++) {
 
  reload[j].style.opacity = "1";
  reload[j].style.display = "flex"
  
}

}
