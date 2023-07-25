import { useState } from 'react'
import './App.css'
// import component to App in main component
import Header from './components/Header'
import Footer from './components/footer'

//define apps func component with type is React.FC
const App : React.FC = () => {
  const msg_footer = 'Design by student of RMIT 2023'
  return (
    <>
      <Header title ='Welcome to Hello ReactJS' />
      <Footer message={msg_footer}/>
    </>
  )
}

export default App
