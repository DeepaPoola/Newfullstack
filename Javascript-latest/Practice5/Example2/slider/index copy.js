const slider =document.querySelectorAll(".slider");
var counter=0;
slider.forEach((slide,index)=>{
   
    slide.style.left=`${index * 100}%`


})
const goPrev=()=>{
    counter--
    slideImage()
}
const gonext=()=>{
    counter++
    slideImage()
}
const slideImage=()=>{
    slider.forEach((slide,index)=>{
       
         slide.style.transform=`translateX(-${counter*100}%)`
       
     
    })
}