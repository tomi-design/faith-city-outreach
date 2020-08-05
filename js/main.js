
/*---For dropdown menu----*/

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event){
 if (!event.target.matches("#dropbutton")){
     let dropdowns = document.getElementsByClassName("dropdown-content");
     let i;
     for (i=0; i<dropdowns.length; i++){
         let openDropdown= dropdowns[i];
         if (openDropdown.classList.contains("show")){
             openDropdown.classList.remove("show");
         }
     }
 }

}






/*------for slide show on homepage-----*/

let slideIndex=0;
showSlides();

function showSlides(){
    let i;
    let slides= document.getElementsByClassName('slideshow');
    for (i=0; i < slides.length; i++){
        slides[i].style.display="none";
    }

    slideIndex++;
    if (slideIndex > slides.length){
        slideIndex=1
    }

    slides[slideIndex-1].style.display="block";
    setTimeout(showSlides, 5000); 
}



/*------------------photo gallery zoom----------*/

