import React,{useEffect,useMemo,useState} from 'react'

import Axios from 'axios'

const Effecthook = () => {
    const [products,setProducts]=useState([])
    useMemo(()=>{
      (async()=>{
       let response=await Axios.get('https://jsonplaceholder.typicode.com/users')
      
        console.log( response.data)
        setProducts(response.data)
        
    })()
        
       },[])
//     useEffect(()=>{
//   (async()=>{
//    let response=await Axios.get('https://jsonplaceholder.typicode.com/users')
  
//     console.log( response.data)
//     setProducts(response.data)
    
// })()
    
//    },[])


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