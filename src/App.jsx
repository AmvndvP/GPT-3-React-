import React from 'react'
import {Footer, Blog, Possibility, Features, Whatgpt3, Header} from './containers'
import {Cta, Brand, Navbar} from './components'
import './App.scss'
import './index.scss'

const App = () => {
  return (
    <div className = "App">
      <div className = "gradient__bg">  
      <Navbar/>
      <Header/>
      </div>
     <Brand/>
     <Whatgpt3 />   
     <Features />
    <Possibility />
     <Cta/>
     <Blog />
     <Footer/>
    </div>
  )
}
export default App

