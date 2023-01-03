import { Container, Nav, Navbar } from "react-bootstrap";
import '../sass/navigation.scss'

export default function Navigation() {
  return(
    <Navbar expand="md">
      <Container>
        <Navbar.Brand>An</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar"/>
        <Navbar.Collapse>
          <Nav className="ms-auto">
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>About Me</Nav.Link>
            <Nav.Link>Projects</Nav.Link>
            <Nav.Link>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}