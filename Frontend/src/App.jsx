import React from 'react'
import Footer from './components/footer/Footer'
import Home from './pages/Home'
import Navbar from './components/navbar/navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Books from './pages/Books'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Cart from './pages/Cart'
import AboutUs from './pages/AboutUs'
import Profile from './pages/Profile'

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
         <Routes>
           <Route exact path='/' element={<Home/>}/>
           <Route  path='/books' element={<Books/>}/>
           <Route  path='/cart' element={<Cart/>}/>
           <Route  path='/about-us' element={<AboutUs/>}/>
           <Route  path='/profile' element={<Profile/>}/>
           <Route  path='/Sign-in' element={<Signin/>}/>
           <Route  path='/Sign-up' element={<Signup/>}/>
         </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
