import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import ProductPage from './pages/ProductPage.jsx'
import ScrollToTop from './components/ScrollTop/ScrollToTop.jsx'
import Profile from './pages/Profile.jsx'
import Payment from './pages/Payment.jsx'
const App = () => {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/category/:id' element={<ProductPage/>}/>
        <Route path='/Profile' element={<Profile/>}/>
        <Route path='/Payment' element={<Payment/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App