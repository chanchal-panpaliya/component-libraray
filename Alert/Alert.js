
/* for live example - close alert*/
const close_alert_example = document.querySelector('.close_alert');

close_alert_example.addEventListener("click",()=>{
    document.querySelector('.alert_example').style.display = "none"
})

/* for live example - open alert*/
function showalertbox(){
  document.querySelector('.alert_example').style.display = "block"
}



/* for live example - group of action alert close*/
var close = document.getElementsByClassName("close_action_alert");
for (var i = 0; i < close.length; i++) {
  close[i].onclick = function(){
    var div = this.parentElement;
    div.style.opacity = "0";
    setTimeout(function(){ div.style.display = "none"; }, 600);
  }
}


/* for live example - group of action alert reload*/
function reload_action_alert(){
  var reload = document.getElementsByClassName("action_alert");
   for (var j = 0; j < close.length; j++) {
    reload[j].style.opacity = "1";
    reload[j].style.display = "flex"
  }
}
