for(let i=1 ; i<=70 ; i++){
   const box = document.createElement('div');
   box.classList.add('box');
   document.querySelector('.color-container').appendChild(box);
}

const btn = document.querySelector('.button-generator');
const randomcolorblock = document.querySelectorAll('.box');

function RandomHexCode(){
    var chars = "0123456789abcdef";
    var colorLength = 6 ;
    var colors = "";

    for(var i=0 ; i<colorLength ; i++){
        var randomcolor = Math.floor(Math.random() * chars.length);
        colors += chars.substring(randomcolor,randomcolor+1);
    }
    return "#"+colors;
}

randomcolorblock.forEach(e=>{
    var newColor = RandomHexCode();
    e.style.backgroundColor = newColor;
    e.innerHTML = newColor;
})

function addColor(){
    randomcolorblock.forEach(e=>{
        var newColor = RandomHexCode();
        e.style.backgroundColor = newColor;
        e.innerHTML = newColor;
    })
}

// --------------------------------


const colorpicker_randomcolorblock = document.getElementsByClassName('colorpicker-box');


function Colorpicker(){
    for(var color = 0 ; color<=colorpicker_randomcolorblock.length-1 ; color++){
        var newColor = RandomHexCode();
        colorpicker_randomcolorblock[color].style.backgroundColor = newColor;
        colorpicker_randomcolorblock[color].childNodes[3].innerHTML = newColor;
        colorpicker_randomcolorblock[color].childNodes[5].value = newColor;
    }
}


function locked(elem){

    if (elem.parentNode.classList.contains('colorpicker-box')) {
        elem.parentNode.classList.remove('colorpicker-box')
        elem.innerHTML = "Locked"
      } else {
        elem.parentNode.classList.add("colorpicker-box");
        elem.innerHTML = "UnLocked"
      }

}

function oncolorchange(val){
   val.parentNode.style.backgroundColor = val.value ;
   val.parentNode.childNodes[3].innerHTML = val.value ;
}



