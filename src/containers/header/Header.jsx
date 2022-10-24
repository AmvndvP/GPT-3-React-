import React from 'react'
import './header.scss'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id ="home">
      <div className = "gpt3__header-content">
<h1 className ="gradient__text">Lets build something amazing with GPT3 OpenAI</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quisquam, quos atque odio maxime voluptas eligendi eos eaque earum exercitationem accusamus mollitia eveniet deleniti aliquam! Est, perspiciatis</p>
<div className = "gpt3__header-content__input">
  <input type = "email" placeholder = "Your email address"/>
  <button type="button">Get started</button>
</div>
<div className = "gpt3__header-content__people">
  <img src = {people} alt = "people"/>
  <p>1k people requested access</p>
</div>
  </div>
  <div className = "gpt3__header-image">
  <img src={ai} alt="ai"/>
  </div>
    </div>
  )
}

export default Header