import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

export const NavBarMenu = ({ items }) => (
  <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="/">Frameworki frontendowe</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav className="me-auto">
            {items.map((item) => (
              <Nav.Link key={item.id} href={`/${item.url}`}>
                {item.label}
              </Nav.Link>
            ))}
          </Nav>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
