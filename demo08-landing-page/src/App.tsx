import './App.sass'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About'
import Home from './pages/Home'
import Action from './pages/Action';
import Service from './pages/Sevices';
import Callout from './pages/Callout';
function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/service' element={<Service/>}/>
      </Routes>
    </Router>
  )
}

export default App

