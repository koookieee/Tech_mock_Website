import React from 'react'
import "./minicard.css"
const Minicard = ({imgurl,title}) => {
  return (
    <div>
      <a className='mini-a'>
        <div className='minidiv'>
        <div className='mini-imd'>
         <img src={imgurl} className="mini-img"/>
        </div>
        <div className='minite'>
          {title}
        </div>
        </div>
      </a>
    </div>
  )
}

export default Minicard
