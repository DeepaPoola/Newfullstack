import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
       <div className="descriptionbox-navigator">
         <div className="descriptionbox-nav-box">Description</div>
         <div className="descriptionbox-nav-box fade">Reviews(122)</div>
       </div>
       <div className="descriptionbox-description">
        <p>An ecommerce website is an online platform that facilitate buying and selling of products or services over the internet
           serves as a virtual marketplace where business and individual showcase their products </p>
           <p>
           An ecommerce website is an online platform that facilitate buying and selling of products or services over the internet
           </p>
       </div>
    </div>
  )
}

export default DescriptionBox