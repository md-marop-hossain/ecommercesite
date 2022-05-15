import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';
import useAuth from "../../../hooks/useAuth";
import { useHistory } from 'react-router-dom';
import { Button } from '@material-tailwind/react';
import Label from "@material-tailwind/react/Label";
import './Header.css';

const Header = () => {

    const { user, logout } = useAuth();
    const history = useHistory();
    const handleSignIn = () => {
        history.push('/login');
    }

    return (
        <div>

            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="/home"><h4 className='techtrans'>TechTrans</h4></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >


                            <NavLink
                                className="nav-bar nav-link"
                                activeStyle={{
                                    fontWeight: "bolder",
                                    color: "cadetblue",
                                    textDecorationLine: 'underline'
                                }}
                                to="/home"
                            >
                                <span>
                                    Home
                                </span>
                            </NavLink>

                            <NavLink
                                className="nav-bar nav-link"
                                activeStyle={{
                                    fontWeight: "bolder",
                                    color: "cadetblue",
                                    textDecorationLine: 'underline'
                                }}
                                to="/monitor"
                            >
                                <span className='route-style'>
                                    Monitor
                                </span>
                            </NavLink>

                            <NavLink
                                className="nav-bar nav-link"
                                activeStyle={{
                                    fontWeight: "bolder",
                                    color: "cadetblue",
                                    textDecorationLine: 'underline'
                                }}
                                to="/tablet"
                            >
                                <span className='route-style'>
                                    Tablet
                                </span>
                            </NavLink>
                            <NavLink
                                className="nav-bar nav-link"
                                activeStyle={{
                                    fontWeight: "bolder",
                                    color: "cadetblue",
                                    textDecorationLine: 'underline'
                                }}
                                to="/speaker"
                            >
                                <span className='route-style' >
                                    Speaker
                                </span>
                            </NavLink>
                            <NavLink
                                className="nav-bar nav-link"
                                activeStyle={{
                                    fontWeight: "bolder",
                                    color: "cadetblue",
                                    textDecorationLine: 'underline'
                                }}
                                to="/contact"
                            >
                                <span className='route-style' >
                                    Contact
                                </span>
                            </NavLink>



                            {/* <NavLink
                                className="nav-bar nav-link"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "cadetblue"
                                }}
                                to="/login"
                            >
                                <span>
                                    LogIn
                                </span>
                            </NavLink>
                            <NavLink
                                className="nav-bar nav-link"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "cadetblue"
                                }}
                                to="/register"
                            >
                                <span>
                                    Register
                                </span>
                            </NavLink> */}











                            {
                                user.email && <NavLink
                                    className="nav-bar nav-link"
                                    activeStyle={{
                                        fontWeight: "bolder",
                                        color: "cadetblue",
                                        textDecorationLine: 'underline'
                                    }}
                                    to="/dashboard"
                                >
                                    <span className='route-style-dashboard'>
                                        Dashboard
                                    </span>
                                </NavLink>
                            }









                            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#" disabled>
                                Link
                            </Nav.Link> */}
                        </Nav>
                        {/* <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form> */}

                        {
                            user.email ? <Button
                                color="pink"
                                buttonType="outline"
                                size="sm"
                                rounded={false}
                                block={false}
                                iconOnly={false}
                                ripple="dark"
                                onClick={logout}
                            >
                                LogOut
                            </Button> :

                                <Button
                                    color="teal"
                                    buttonType="outline"
                                    size="sm"
                                    rounded={false}
                                    block={false}
                                    iconOnly={false}
                                    ripple="dark"
                                    onClick={handleSignIn}
                                >
                                    LogIn
                                </Button>
                        }




                        {

                            user.email && <Label color="blueGray" className="ml-2"><span className="user-name">User name: {user.displayName}</span></Label>
                        }

                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;