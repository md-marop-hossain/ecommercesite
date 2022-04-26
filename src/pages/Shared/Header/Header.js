import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
// import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import useAuth from "../../../hooks/useAuth";
import { useHistory } from 'react-router-dom';
import { Button } from '@material-tailwind/react';
import Label from "@material-tailwind/react/Label";

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
                    <Navbar.Brand href="#">TechTrans</Navbar.Brand>
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
                                    fontWeight: "bold",
                                    color: "cadetblue"
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
                                    fontWeight: "bold",
                                    color: "cadetblue"
                                }}
                                to="/monitor"
                            >
                                <span>
                                    Monitor
                                </span>
                            </NavLink>

                            <NavLink
                                className="nav-bar nav-link"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "cadetblue"
                                }}
                                to="/tablet"
                            >
                                <span>
                                    Tablet
                                </span>
                            </NavLink>
                            <NavLink
                                className="nav-bar nav-link"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "cadetblue"
                                }}
                                to="/speaker"
                            >
                                <span>
                                    Speaker
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
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;