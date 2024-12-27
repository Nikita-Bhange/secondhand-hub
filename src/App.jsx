import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import Products from './pages/Products.jsx'
import ScrollToTop from './components/ScrollTop/ScrollToTop.jsx'
const App = () => {
  return (
    <BrowserRouter>
    <ScrollToTop/>
     <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/category/:id' element={<Products/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App