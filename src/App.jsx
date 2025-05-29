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
import Footer from "./components/Footer"
import Prod from "./pages/Prod"
import ProductProvider from "./contexts/ProductContext"
import SingleProd from "./pages/SingleProd"
// import Provider from "./components/Provider"
import Signin from "./pages/Signin"
import Dashboard from "./components/Dashboard"
// import Child3 from "./components/Child3"
// import AuthProvider from "./contexts/AuthContext"
import ProtectedRoute from "./components/ProtectedRoute"
import Login from "./components/Login"
import Admin from "./components/Admin"
import AdminProtectedRoutes from "./components/AdminProtectedRoutes"
import { Toaster } from "sonner"
import Signup from "./pages/Signup"
import AuthProvider from "./contexts/AuthContext"
import MyProduct from "./pages/MyProduct"
import VerifyAccount from "./pages/VerifyAccount"
import ReactHookForm from "./components/ReactHookForm"


const App = () => {
  return (
    <>
    {/* <Provider>
      <Child1 />
      <Child2 />
      <Child3 />
    </ Provider> */}
    <AuthProvider >
     <ProductProvider >
     <BrowserRouter>
      <Header />
        <Routes>
             <Route path="/" element={<Home/>}/>
             <Route path="/myproduct" element={<MyProduct/>}/>
             <Route path="/about" element={<About/>}/>
             <Route path="/contact" element={<Contact/>}/>
             <Route path="/product" element={<Product/>}/>
             <Route path="/prods" element={<Prod/>}/>
             <Route path="/prods/:id" element={<SingleProd/>}/>
             <Route path="/product/:id" element={<SingleProduct/>}/>
             <Route path="/signin" element={<Signin />}/>
             <Route path="/signup" element={<Signup />}/>
             <Route path="/react-hook-form" element={<ReactHookForm />} />
             <Route path="/verify/:token" element={<VerifyAccount/>}/>
             <Route path="/login" element={<Login/>}/>
             <Route element={<ProtectedRoute />} >
                <Route path="/dashboard" element={<Dashboard />}/>
                <Route element={<AdminProtectedRoutes/>} >
                  <Route path="/admin" element ={<Admin/>}/>
                </Route>
             </Route>
             
             
             <Route path="*" element={<NotFound/>}/>
        </Routes>
       <Footer />
      </BrowserRouter>
      <Toaster  position="top-right"/>
     </ProductProvider>
     </AuthProvider>
    </>
  )
}

export default App