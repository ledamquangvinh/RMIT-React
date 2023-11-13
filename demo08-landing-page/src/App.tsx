import './App.sass'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About'
import Home from './pages/Home'
import Action from './pages/Action';
import Service from './pages/Sevices';
import Callout from './pages/Callout';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/callout' element={<Callout/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
      </Routes>
    </Router>
  )
}

export default App

