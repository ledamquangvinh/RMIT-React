import { useState } from 'react'
import './App.css'
// import component to App in main component
import Header from './components/Header'
import Footer from './components/Footer'
import Content from './components/Content'

//define apps func component with type is React.FC
const App : React.FC = () => {
  const msg_footer = 'Design by student of RMIT 2023'
  return (
    <>
      <Header title ='Welcome to Hello ReactJS' />
      <Content/>
      <Footer message={msg_footer}/>
    </>
  )
}

export default App
