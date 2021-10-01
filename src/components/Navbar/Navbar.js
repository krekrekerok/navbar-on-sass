import React, { useState } from 'react';
import navLogo from '../../images/navlogo.svg'
import yellowBurger from '../../images/burgerYellow.svg'

const Navbar = () => {
    const [mobileNavOpen, setMobileNavOpen] = useState(false)

    return (
        <>
            <div className="navbar">
                <div className="container h-100">
                    <div className="nav h-100">
                        <div className="nav-left">
                            <img className="nav-logo" src={navLogo} alt ="logo"/>
                            <span>Documentation</span>
                        </div>
                        <div className="nav-right">
                            <ul className="nav-list">
                                <li className="nav-item">Главная</li>
                                <li className="nav-item">Документация</li>
                                <li className="nav-item">Добавить</li>
                                <li className="nav-item">
                                    <input type= "text" placeholder="Поиск..." />
                                </li>
                                <li className="nav-item">GitHub</li>
                            </ul>
                            <div className="nav-btn">
                            {
                                mobileNavOpen ? (true) : (
                                    <button
                                        onClick = {()=>setMobileNavOpen(!mobileNavOpen)}>
                                        <img src={yellowBurger} alt="burger menu"/>
                                    </button>
                                )
                            }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                mobileNavOpen ? (
                    <div className="navbar-mobile">
                        <div className="container">
                            <div className="cancel-block">
                                <span onClick = {() => setMobileNavOpen(!mobileNavOpen)}>&#10006;</span>
                            </div>
                            <ul>
                                <li>Главная</li>
                                <li>Документация</li>
                                <li>Добавить</li>
                                <li>
                                    <input type= "text" placeholder="Поиск..." />
                                </li>
                                <li>GitHub</li>
                            </ul>
                        </div>
                    </div>
                ) : (null)
            }

        </>
    );
};

export default Navbar;