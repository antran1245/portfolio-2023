import { Container, Nav, Navbar } from "react-bootstrap";
import '../sass/navigation.scss'

export default function Navigation() {
  return(
    <Navbar expand="md" fixed="top" variant="dark">
      <Container>
        <Navbar.Brand>An</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar"/>
        <Navbar.Collapse>
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#aboutme">About Me</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}