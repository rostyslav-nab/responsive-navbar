import React from "react"
import {Button, Container, Nav, Navbar, NavDropdown} from "react-bootstrap"
import './Header.scss'
import logo from '../assets/logo.png'

export const Header = () => {
    return (
        <Navbar collapseOnSelect expand='lg' fixed="top" classname='mainNav'>
            <Container>
                    <Container>
                        <Navbar.Brand href='/'>
                            <img src={logo} alt="logo" className='d-inline-block align-top logo'/>
                        </Navbar.Brand>
                        <div className='buttons-collection'>
                            <Button variant="primary" className='button-custom'>LOG IN</Button>
                            <Button variant="warning" className='button-custom'>SIGN UP</Button>
                        </div>
                        <Navbar.Toggle aria-controls='responsive-navbar-nav' className='burger'/>
                    </Container>
                    <Navbar.Collapse id='responsive-navbar-nav' className='collapse-nav'>
                        <Nav className='mr-auto'>
                                <NavDropdown title="Home" id="collasible-nav-dropdown" className='nav-drop'>
                                    <NavDropdown.Item href="#action/3.1"><p>Action</p></NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2"><p>Another action</p></NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3"><p>Something</p></NavDropdown.Item>
                                </NavDropdown>
                            <NavDropdown title="Blog" id="collasible-nav-dropdown" className='nav-drop'>
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="About" id="collasible-nav-dropdown" className='nav-drop'>
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>

            </Container>
        </Navbar>
    )
}