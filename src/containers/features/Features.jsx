import React from 'react'
import { Feature } from '../../components'
import './features.scss'

const featuresData = [
  {
    title: 'Improving end distrusts instantly',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur, neque mollis convallis volutpat, leo sapien vestibulum sem, nec porta odio eros ut enim. Integer eu'
  },
  {
    title: 'Constantly evolving',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur, neque mollis convallis volutpat, leo sapien vestibulum sem, nec porta odio eros ut enim. Integer eu'
  },
  {
    title: 'Improving end distrusts instantly',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur, neque mollis convallis volutpat, leo sapien vestibulum sem, nec porta odio eros ut enim. Integer eu'
  },
  {
    title: 'Improving end distrusts instantly',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur, neque mollis convallis volutpat, leo sapien vestibulum sem, nec porta odio eros ut enim. Integer eu'
  }
]

const Features = () => {
  return (
    <div className = "gpt3__features section__padding" id ="features">
      <div className = "gpt3__features-heading">
    <h1 className = "gradient__text">The future is now.</h1>
    <p>Request early access</p>
      </div>
      <div className="gpt3__features-container">
      {featuresData.map((item, index) =>
      <Feature title ={item.title} text={item.text} key={item.title + index} />
      )}
      
      </div>

    </div>
  )
}

export default Features