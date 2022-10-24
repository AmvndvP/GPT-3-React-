import React from 'react'
import './possibility.scss'
import possibilityImage from '../../assets/possibility.png'


const Possibility = () => {
  return (
    <div className = "gpt3__possibility section__padding" id="possibility">
      <div className ="gpt3__possibility-image">

<img src = {possibilityImage} alt= "possibility"/>
      </div>


      <div className="gpt3__possibility-content">

    <h4>Request early access to get started</h4>
    <h1 className = "gradient__text">The possibilities are beyond our imagination.</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione sapiente quis magnam non commodi quasi porro dolores eveniet ipsa eligendi?</p>
    <h4>Request for early access</h4>
      </div>



    </div>
  )
}

export default Possibility