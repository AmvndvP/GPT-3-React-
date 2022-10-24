import React from 'react'
import { Feature } from '../../components'
import './whatgpt3.scss'


const Whatgpt3 = () => {
  return (
    <div className = "gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className = "gpt3__whatgpt3-feature">
        <Feature  title ="What is GPT3?" text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur, neque mollis convallis volutpat, leo sapien vestibulum sem, nec porta odio eros ut enim. Integer eu "/>
      </div>
      <div className = "gpt3__whatgpt3-heading">
        <h1 className = "gradient__text">The possibilities are beyond your imagination.</h1>
        <p>Explore the library</p>
      </div>
      <div className = "gpt3__whatgpt3-container">
        <Feature title ="Chatbots" text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur, neque mollis convallis volutpat, leo sapien vestibulum sem, nec porta odio eros ut enim. Integer eu " />
        <Feature title = "Knowlegebase" text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur, neque mollis convallis volutpat, leo sapien vestibulum sem, nec porta odio eros ut enim. Integer eu "/>
        <Feature title ="Education" text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur, neque mollis convallis volutpat, leo sapien vestibulum sem, nec porta odio eros ut enim. Integer eu " />
      </div>

    </div>
  )
}

export default Whatgpt3