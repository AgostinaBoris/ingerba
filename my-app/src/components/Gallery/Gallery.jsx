import React from 'react'
import './Gallery.css'




export default function Gallery(props) {
  return (
    <div className='gallery'>
        <div className="container">
            <div style={{ background:`url('${props.bgImg1}') no-repeat center center/cover `}} className="left"></div>

            <div style={{ background:`url('${props.bgImg2}') no-repeat center center/cover `}} className="right"></div>

            <div style={{ background:`url('${props.bgImg3}') no-repeat center center/cover `}} className="left2"></div>

            <div style={{ background:`url('${props.bgImg4}') no-repeat center center/cover `}} className="right2"></div>
      
            </div>
        </div>


    
  )
}

