import React from 'react'
import './NewsLetter.css'

export const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers on your email</h1>
        <p>Subscribe to our  newsletter and stay update</p>
        <div>
            <input type="email" placeholder='your email' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter