

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



/*------------sildeshow--------------*/


const slideshowImages = document.querySelectorAll(".hero .mySlides");

const nextImageDelay = 5000; 
let currentImageCounter= 0;

slideshowImages[currentImageCounter].style.opacity = 1;
setInterval(nextImage, nextImageDelay);

function nextImage(){
    //slideshowImages[currentImageCounter].style.opacity = 0;
    slideshowImages[currentImageCounter].style.zIndex = -2;
    const tempCounter = currentImageCounter;
    setTimeout(() => {
        slideshowImages[tempCounter].style.opacity = 0;
    }, 1000);
    currentImageCounter = (currentImageCounter + 1) % slideshowImages.length;
    slideshowImages[currentImageCounter].style.opacity = 1;
    slideshowImages[currentImageCounter].style.zIndex = -1;
}


