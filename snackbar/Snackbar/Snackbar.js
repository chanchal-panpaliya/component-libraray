var Snackbar1 = document.getElementById("Snackbar1");
var Snackbar2 = document.getElementById("Snackbar2");

Snackbar1.addEventListener("click",()=>{
    document.getElementById("simple-snackbar").style.display = "block";
})

function close_simplesnackbar(){
    document.getElementById("simple-snackbar").style.display = "none"; 
}

Snackbar2.addEventListener("click",()=>{
    document.getElementById("undo-snackbar").style.display = "block";
})

function close_undo_snackbar(){
    document.getElementById("undo-snackbar").style.display = "none";  
}

