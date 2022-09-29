import React from 'react'
import Navbar from './Navbar/Navbar'
import Banner from './Banner/Banner'
import Product from './Products/Product'
import Footer from './Footer/Footer'
function HomePage() {
  return (
    <div>
        <Navbar />
        <Banner />
        <Product />
        <Footer />
    </div>
  )
}

export default HomePage