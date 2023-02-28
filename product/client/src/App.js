import React from 'react'
import Navbar from './Navbar/Navbar'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './product/Home'
import Product from './product/Product'

const App = () => {
  return (
    <div>
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/Home' element={<Home/>}/>
                <Route path='/Product' element={<Product/>}/>
                </Routes>
            </Router>
    </div>
  )
}

export default App
