

const allstars = document.querySelectorAll(".star");

allstars.forEach((star,i)=>{
    star.addEventListener("click",()=>{
            
             let current_star_level = i+1;
             allstars.forEach((star,j)=>{
                if(current_star_level>=j+1){
                    star.style.color = "orange";
                }else{
                    star.style.color = "";  
                }
             })
        })
})

const card_star_rating = document.querySelectorAll(".card_star");
card_star_rating.forEach((star,i)=>{
    star.addEventListener("click",()=>{
            
             let current_star_level = i+1;
             card_star_rating.forEach((star,j)=>{
                if(current_star_level>=j+1){
                    star.style.color = "orange";
                }else{
                    star.style.color = "";  
                }
             })
        })
})

