const slides=document.querySelectorAll(".slides")
var counter=0;

slides.forEach((slide,index)=>{
   
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
    slides.forEach((slide,index)=>{
       
         slide.style.transform=`translateX(-${counter*100}%)`
       
     
    })
}