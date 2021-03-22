import { useState } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import logo from './logo.png'
import './Navigation.css'

import { NavLink, Link } from 'react-router-dom'

const Navigation = ({ handleAlert }) => {

    const [changeClass, setChangeClass] = useState(false)
    document.addEventListener('scroll', (e) => scrollNav(e))

    function scrollNav(e) {
        const scrollTop = window.pageYOffset
        if (scrollTop > 120) setChangeClass(true)
        else if (scrollTop < 120) setChangeClass(false)
    }


    return (
        <Navbar expand="md" className={changeClass ? "navb filled" : "navb"} fixed="top" >
            <Link to="/">
                <Navbar.Brand> <img
                    alt=""
                    src={logo}
                    width="40"
                    height="40"
                    className="d-inline-block align-top"
                />{' '}</Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <NavLink to="/about" exact>
                        <Nav.Link as="span">About & Skills</Nav.Link>
                    </NavLink>
                    <NavLink to="/portfolio">
                        <Nav.Link as="span">Portfolio</Nav.Link>
                    </NavLink>


                </Nav>
            </Navbar.Collapse>
        </Navbar >
    )
}

export default Navigation