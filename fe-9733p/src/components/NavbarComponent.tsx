import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavbarBS from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { useStore } from "../stores/store";

function NavbarComponent() {
    const { favorites } = useStore();
    return (
        <NavbarBS expand="lg" className="bg-body-tertiary">
            <Container>
                <NavbarBS.Brand className="fw-semibold" href="/">FE-9733P</NavbarBS.Brand>
                <NavbarBS.Toggle aria-controls="basic-navbar-nav" />
                <NavbarBS.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={NavLink} to="/">
                            Home
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/users">
                            Users
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/favorites">
                            Favorites ({favorites.length})
                        </Nav.Link>
                    </Nav>
                </NavbarBS.Collapse>
            </Container>
        </NavbarBS>
    )
}

export default NavbarComponent