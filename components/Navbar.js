'use client'
import './navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navbars = () => {
  const menuItems = [
    {
        title: "Home",
        href: "#",
        subLinks: [
            {
                title: "link1",
                href: "#"
            },
            {
                title: "link2",
                href: "#"
            },
            {
                title: "link3",
                href: "#"
            },
            {
                title: "link4",
                href: "#"
            }
        ]
    },
    {
        title: "Products",
        href: "#",
        subLinks: [
            {
                title: "product1",
                href: "#"
            },
            {
                title: "product2",
                href: "#"
            },
            {
                title: "product3",
                href: "#"
            },
            {
                title: "product4",
                href: "#"
            }
        ]
    },
    {
        title: "About us",
        href: "#",
        subLinks: [
            {
                title: "aboutus1",
                href: "#"
            },
            {
                title: "aboutus2",
                href: "#"
            },
            {
                title: "aboutus3",
                href: "#"
            },
            {
                title: "aboutus4",
                href: "#"
            }
        ]
    }
  ];

  return (
    <Navbar collapseOnSelect expand="lg" className="navContainer">
        <Container>
          <Navbar.Brand href="#">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {
                menuItems.map((item, index) => (
                  <NavDropdown 
                    key={index}
                    title={item.title}
                    href={item.href} 
                    id="collasible-nav-dropdown"
                    className="dropdown"
                  >
                    {
                      item.subLinks.map((link, index) => (
                        <NavDropdown.Item href={link.href} key={index}>
                          {link.title}
                        </NavDropdown.Item>
                      ))
                    }
                  </NavDropdown>    
                ))
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Navbars;