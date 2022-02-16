var floating_action_button = document.getElementById("floating_action_button");

floating_action_button.addEventListener("click",event=>{

    if(document.getElementsByClassName("floating_action_button")[0].style.display === "block"){
        document.getElementsByClassName("floating_action_button")[0].style.display = "none"
    }else{
        document.getElementsByClassName("floating_action_button")[0].style.display = "block" 
    }
})