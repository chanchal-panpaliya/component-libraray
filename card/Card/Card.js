var vertical_hover_icon = document.getElementsByClassName("vertical-hover-icon");

for (i = 0; i < vertical_hover_icon.length; i++) {
    vertical_hover_icon[i].addEventListener("click", event => {
   
       if(event.target.innerText==="star_border"){
        event.target.innerText = "star_rate"
       }else{
        event.target.innerText="star_border" 
       }
   
    });
  }


var Horizentol_rating_icon = document.getElementsByClassName("Horizentol-rating-icon"); 
for (i = 0; i < Horizentol_rating_icon.length; i++) {
  Horizentol_rating_icon[i].addEventListener("click", event => {
 
     if(event.target.innerText==="star_border"){
      event.target.innerText = "star_rate"
     }else{
      event.target.innerText="star_border" 
     }
 
  });
}


  var Cards_dismiss = document.getElementsByClassName("Vertical-Cards-with-badge-body-dismiss");


var vertical_icon_dismiss = document.getElementsByClassName("vertical-icon-dismiss");  
var j;

for (j = 0; j < vertical_icon_dismiss.length; j++) {
    vertical_icon_dismiss[j].onclick = function(){

    var div = this.parentNode.parentNode.parentNode;
    div.style.opacity = "0";
    setTimeout(function(){ div.style.display = "none"; }, 600);
  }
}


var reload_dismiss_card = document.getElementById("reload_dismiss_card");
reload_dismiss_card.addEventListener("click",event=>{
    Cards_dismiss[0].style.display = "flex"
    Cards_dismiss[1].style.display = "flex"
    Cards_dismiss[2].style.display = "flex"
    Cards_dismiss[0].style.opacity = "1";
    Cards_dismiss[1].style.opacity = "1";
    Cards_dismiss[2].style.opacity = "1";
})
