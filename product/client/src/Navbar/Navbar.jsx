
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class Navbar extends Component {
    render() {
        return <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <Link to="/#" className="navbar-brand">Product CRUD Operation</Link>
            <div className="ml-auto">
                <ul className="navbar-nav">
                    <li className="nav-list"><Link className="nav-link" to="/Home">Home</Link></li>
                    <li className="nav-list"><Link className="nav-link" to="/product">Product</Link></li>
                    <li className="nav-list"><Link className="nav-link" to="/Admin">Admin</Link></li>
                    <li className="nav-list"><Link className="nav-link" to="/CreateProdut">CreateProduct</Link></li>

                </ul>
            </div>
        </nav>
    }
}

export default Navbar
