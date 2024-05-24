import React from 'react'
import './NewsLetter.css'
const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>GET EXCULSIVE OFFER ON YOUR EMAIL</h1>
        <p>Subscribe to our newletter and stay updated</p>
         <hr/>
         <div>
           <input type="email" placeholder='Your Email Id'/>
           <button>Subscribe</button>
           </div>
    </div>
  )
}

export default NewsLetter