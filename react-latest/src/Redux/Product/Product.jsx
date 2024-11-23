import React from 'react'
import {incrAction,decrAction} from '../ReduxComponents/product.action'
import {useDispatch,useSelector} from 'react-redux'

const Product = () => {
 
  let dispatch=useDispatch()

  let product=useSelector((state)=>{
    return state.product
  })

    let decrHandler=()=>{
      dispatch(decrAction())
    }

    let incrHandler=()=>{
        dispatch(incrAction())
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
                    <td>{product.name}</td>
                    <td><img src={product.image}/></td>
                    <td>{product.price}</td>
                    <td>
                   <i className='fas fa-minus-circle' onClick={decrHandler}></i>
                    
                    {product.qty}
                    <i className='fas fa-plus-circle' onClick={incrHandler}></i></td>
                    <td>{product.qty*product.price}</td>
                </tbody>
            </table>
        </div>
       </div>
   </div>
  )
}

export default Product