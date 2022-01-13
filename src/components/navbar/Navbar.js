import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav
                className="navbar is-fixed-top is-light"
                role="navigation"
                aria-label="main navigation"
            >
                <div className="container">
                    <div className="navbar-brand">
                        <a className="navbar-item" href="https://bulma.io">
                            <img
                                src="https://bulma.io/images/bulma-logo.png"
                                width="120"
                                height="30"
                                alt="Bulma-Logo"
                            />
                        </a>
                    </div>
                    <div className="navbar-menu">
                        <div className="navbar-end">
                            <Link
                                to="/"
                                className="navbar-item"
                                activeclassname="is-active"
                            >
                                Home
                            </Link>
                            <Link
                                to="/about"
                                className="navbar-item"
                                activeclassname="is-active"
                            >
                                About
                            </Link>
                            <Link
                                to="/portfolio"
                                className="navbar-item"
                                activeclassname="is-active"
                            >
                                Portfolio
                            </Link>
                            <Link
                                to="/hello/Boss"
                                className="navbar-item"
                                activeclassname="is-active"
                            >
                                SayHi
                            </Link>
                            <a
                                className="navbar-item"
                                href="https://github.com/l3ossdevz"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Follow on &nbsp; <i className="fab fa-github" />
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
