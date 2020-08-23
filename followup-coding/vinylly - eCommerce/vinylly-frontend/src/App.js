import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import './App.css';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';

function App() {

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open")
  }

  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open")
  }

  return (
    <BrowserRouter>
    <div className="grid-container">
        <header className="header">
            <div className="brand">
                <button onClick={openMenu}>
                    {String.fromCharCode(9776)}
                </button>
                <Link to='/'>vinylly shop</Link>
            </div>

            <div className="header-links">
                <a href="Cart.html">
                    Cart
                </a>
                <a href="Sign-in.html">
                    Sign-in
                </a>
            </div>

        </header>
        <aside className="sidebar">
            <h3>Categories</h3>
            <button onClick={closeMenu} className="sidebar-close-button">X</button>
            <ul>
                <li>
                    <a href="">
                        International
                    </a>
                </li>

                <li>
                    <a href="">
                        Korea
                    </a>
                </li>

                <li>
                    <a href="">
                        Japan
                    </a>
                </li>

                <li>
                    <a href="">
                        Taiwan
                    </a>
                </li>
            </ul>
        </aside>

        <main className="main">
        <div className="content">
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/" component={HomeScreen} exact={true} />
            
        </div>
        </main>

        <footer className="footer">
            eCommerce practice project by Phipat Limprasutr
        </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;