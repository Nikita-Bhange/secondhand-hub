import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import ProductPage from './pages/ProductPage.jsx'
import ScrollToTop from './components/ScrollTop/ScrollToTop.jsx'
import Profile from './pages/Profile.jsx'
const App = () => {
  return (
    <BrowserRouter>
    <ScrollToTop/>
     <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/category/:id' element={<ProductPage/>}/>
        <Route path='/Profile' element={<Profile/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App