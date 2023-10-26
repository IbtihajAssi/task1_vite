import React from 'react'
import Navbar from './Component/navbar/Navbar.jsx'
import Products from './Component/products/Products.jsx'
import Footer from './Component/footer/footer.jsx'

function App() {
  return (
    <div className='container'>
<Navbar />
<Products/>
<Footer />
    </div>
  )
}

export default App