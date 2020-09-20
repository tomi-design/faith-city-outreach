

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


/*-----------slick slideshow----------*/


$(document).ready(function () {

  $('.slickSlideshow').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  });
});
