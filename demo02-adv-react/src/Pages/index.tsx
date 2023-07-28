import React from "react";
import Headers from "../Components/Header";
import Footer from "../Components/Footer";
import Navbar from "../Components/NavBar";

import { 
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import { Home } from "./Home";
import { Contact } from "./Contact";
import { About } from "./About";
import { Products } from "./Products";


const Pages : React.FC = () => {
  return(
    <>
      <Headers/>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element= { <Home/ > } />
          <Route path="products/*" element={ <Products/> } />
          <Route path="about" element= { <About /> } />
          <Route path="contact" element= { <Contact /> } />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default Pages