import React from 'react'
import {connect} from 'react-redux'

const Badge = () => {
  return (
    <div style={{"margin":"80px 0px 10px 0px"}}>
        <center>
            <button type="button" className='btn btn-primary position-relative'>
                Total Products
                <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-red'>
                  {products.length}
                </span>
            </button>
        </center>

    </div>
  )
}

const mapStateToProps= state=>({
    products : state
})

export default connect(mapStateToProps)(Badge);