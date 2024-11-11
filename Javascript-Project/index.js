let pro1=document.querySelectorAll(".pro1");
let itemImg=document.getElementById("itemImg");
const imageLinks=document.querySelectorAll('a[data-image]');


imageLinks.forEach(link=>{
  link.addEventListener("click", e=>{
    const imageurl=link.getAttribute('data-image');
    const queryString=`?image=${imageurl}`;
    link.href+=queryString;
  })
})

// let pro1=document.querySelectorAll(".pro1");
// let itemImg=document.getElementById("itemImg");


// let des=document.querySelectorAll(".des")
//    console.log(pro1)

  
   
  
//    pro1.forEach(function(curValue){
//         curValue.addEventListener("click",function(){
        
      
//               let imgsrc=curValue.firstElementChild.src;
           
             
//               console.log(imgsrc)
//              itemImg.src=imgsrc
     
//     })
//     })

// let pro1=document.querySelectorAll(".pro1");
// let productimage=document.querySelector(".productimage")
// let itemImg=document.getElementById("itemImg");
// let pro=document.getElementById("pro")
//    console.log(pro1)



// pro1.forEach(function(curValue){
//     curValue.addEventListener("click",function(){
//         console.log(curValue);
//       let  imgSrc=curValue.firstElementChild.src;
//            `<img src="/products/f${imgSrc}.jpg"/>`
        
         

// })
// })








     
   
  


