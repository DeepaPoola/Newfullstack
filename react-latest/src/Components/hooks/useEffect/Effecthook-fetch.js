import React,{useEffect,useState} from 'react'

// import Axios from 'axios'

const Effecthook = () => {
    const [products,setProducts]=useState([])
    useEffect(
        ()=>{
         getProducts()
    },[])

    async function getProducts(){
      let res= await  fetch('https://jsonplaceholder.typicode.com/users')
        console.log(res);
       let productList=await  res.json();
       console.log(productList)
       setProducts(productList)
    }
  return (
    <>
       <div>
        <table border="1">
            <thead>
                <th>Id</th>
                <th>Name</th>
            </thead>
            <tbody border="1">
            {
            products.map((product)=> {
              return  <tr>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                </tr>
            })
          }
            </tbody>
        </table>
         
   
       </div>
     </>
    
  
       
        )
       

  
}

export default Effecthook