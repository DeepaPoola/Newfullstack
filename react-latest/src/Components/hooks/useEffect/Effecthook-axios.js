import React,{useEffect,useState} from 'react'

import Axios from 'axios'

const Effecthook = () => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
  (async()=>{
   let response=await Axios.get('https://jsonplaceholder.typicode.com/users')
   .then((response)=>{
    console.log( response.data)
    setProducts(response.data)
 })
 .catch((err)=>{
     console.error(err)
 })
    
})()
    
   },[])


  return (
    <>
       <div>
        <table border="1">
            <thead>
                <th>Id</th>
                <th>Name</th>
            </thead>
            <tbody>
            {
            products.map((product)=> {
              return  <tr key={product.id}>
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