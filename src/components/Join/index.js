import React from 'react';
import "./Join.css"

const Join = () => {
  return (
    <section className='join' id='join-us'>
        <div className='left-j'>
            <hr />
            <div>
                <span className='stroke-text'>READY TO</span>
                <span>LEVEL UP</span>
            </div>
            <div>
                <span>YOUR BODY</span>
                <span className='stroke-text'>WITH US?</span>
            </div>
        </div>
        <div className='right-j'>
            <form className='email-container'>
                <input type="email" name="user_email" placeholder="Enter your Email Address"  />
                <button className='btn btn-join'>Join Now</button>
            </form>
        </div>
    </section>
  )
}

export default Join;