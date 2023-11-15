import {BrowserRouter, Routes, Route} from "react-router-dom"

import { default as VisitorLayout} from "./pages/Visitor/_Layout"
import { default as AdminLayout} from "./pages/Admin/_Layout"


import './App.sass'

const App : React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<VisitorLayout/>}></Route>
        <Route path="/admin" element={<AdminLayout/>}></Route>
      </Routes>

    </BrowserRouter>
  )
}

export default App
