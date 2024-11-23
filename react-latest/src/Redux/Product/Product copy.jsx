import React,{useState} from 'react'

const Product = () => {
    const [products,setProducts]=useState({
        product:{
            name:"Apple Iphone 12",
            image:"https://www.google.com/imgres?q=iphone%20images&imgurl=https%3A%2F%2Finventstore.in%2Fwp-content%2Fuploads%2F2023%2F04%2FBlue-scaled.webp&imgrefurl=https%3A%2F%2Finventstore.in%2Fproduct%2Fiphone-14%2F&docid=2Df8bABBZ_FC6M&tbnid=tgYD-8ztCOpw-M&vet=12ahUKEwisjKXsl-iJAxWZSmwGHf9jO3YQM3oECGcQAA..i&w=2560&h=2560&hcb=2&ved=2ahUKEwisjKXsl-iJAxWZSmwGHf9jO3YQM3oECGcQAA",
            price:20000,
            qty:1
        }
    })
  

    let decrHandler=()=>{
      setProducts({product:{...products.product,qty:products.product.qty-1}})
    }

    let incrHandler=()=>{
        setProducts({product:{...products.product,qty:products.product.qty+1}})
     }

  return (
   <div className='container mt-5'>
       <div className="row">
        <div className="col-md-6">
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <td>{products.product.name}</td>
                    <td><img src={products.product.image}/></td>
                    <td>{products.product.price}</td>
                    <td>
                           {(products.product.qty)? <><i className='fas fa-minus-circle' onClick={decrHandler}></i></>:null}
                    
                    {products.product.qty}
                    <i className='fas fa-plus-circle' onClick={incrHandler}></i></td>
                    <td>{products.product.qty*products.product.price}</td>
                </tbody>
            </table>
        </div>
       </div>
   </div>
  )
}

export default Product