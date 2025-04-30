import "./App.css"
import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
// import Landingpage from './pages/LandingPage'
import Contact from './pages/Contact'
import SingleProduct from './pages/SingleProduct'
import NotFound from './pages/NotFound'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'


const App = () => {
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
             <Route path="/" element={<Home/>}/>
             <Route path="/about" element={<About/>}/>
             <Route path="/contact" element={<Contact/>}/>
             <Route path="/product" element={<Product/>}/>
             <Route path="/product/:id" element={<SingleProduct/>}/>
             <Route path="*" element={<NotFound/>}/>
        </Routes>
       <h1>Footer</h1>
      </BrowserRouter>
    </>
  )
}

export default App