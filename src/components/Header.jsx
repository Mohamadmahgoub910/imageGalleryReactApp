import React from 'react';
import { Navbar, Container } from "react-bootstrap";


const Header = (props) => {
    const { title } = props;
    const navBarStyle = {
        backgroundColor: 'deepskyblue'
    };
    return (
        <Navbar style={navBarStyle} variant="dark">
            <Container>
                <Navbar.Brand href="/">{title}</Navbar.Brand>
            </Container>
        </Navbar>
    )
}
export default Header