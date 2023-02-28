import React from 'react'
import Navbar from './Navbar/Navbar'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Main from './Todo/Main'
const App = () => {
  return (
    <div>
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/Main' element={<Main/>}/>
                </Routes>
            </Router>
    </div>
  )
}

export default App
