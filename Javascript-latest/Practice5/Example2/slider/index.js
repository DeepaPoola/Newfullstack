

var slideIndex=1;
var myslides=document.getElementsByClassName("slides");
showSlides(slideIndex);
function loadImg(){
    myslides[slideIndex-1].style.display="block";
}

function plusSlides(n)
{
    showSlides(slideIndex+=n)
}

function currentSlide(n){
    showSlides(slideIndex=n);
}
function showSlides(n){
    var i;
  
    var mydots=document.getElementsByClassName("dots");
   
    if( n > myslides.length){
        slideIndex=1;
    }
    if(n < 1){
        slideIndex=myslides.length;
    }
    for(i=0;i< myslides.length;i++)
    {
        myslides[i].style.display="none";
    }
    for (i = 0; i < mydots.length; i++) {
        mydots[i].className = mydots[i].className.replace(" active", "");
      }
    
    myslides[slideIndex-1].style.display="block";
    mydots[slideIndex-1].className += " active";
}


