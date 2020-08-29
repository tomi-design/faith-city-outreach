

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



// /*------------original sildeshow--------------*/


// const slideshowImages = document.querySelectorAll(".hero .mySlides");

// const nextImageDelay = 5000; 
// let currentImageCounter= 0;

// slideshowImages[currentImageCounter].style.opacity = 1;
// setInterval(nextImage, nextImageDelay);

// function nextImage(){
//     //slideshowImages[currentImageCounter].style.opacity = 0;
//     slideshowImages[currentImageCounter].style.zIndex = -2;
//     const tempCounter = currentImageCounter;
//     setTimeout(() => {
//         slideshowImages[tempCounter].style.opacity = 0;
//     }, 1000);
//     currentImageCounter = (currentImageCounter + 1) % slideshowImages.length;
//     slideshowImages[currentImageCounter].style.opacity = 1;
//     slideshowImages[currentImageCounter].style.zIndex = -1;
// }


/*----new slideshow----*/

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

