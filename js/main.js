


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


/*let slideIndex=0;
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
}*/




/*---ORIGINAL var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  
  setTimeout(carousel, 3500); // Change image every 2 seconds
}*/


/*---third slideshow with jquery $("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
},  3000);*/






/*last version 

var current = 0,
    slides = document.getElementsByClassName("mySlides");

setInterval(function() {
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.opacity = 0;
  }
  current = (current != slides.length - 1) ? current + 1 : 0;
  slides[current].style.opacity = 1;
}, 3000);
*/




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

