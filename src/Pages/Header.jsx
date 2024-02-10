import React, { useState } from 'react';
import { Nav, Navbar, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div>
      <Navbar collapseOnSelect expand="lg"  variant="dark">
        <Container>
          <Row className="w-100">
            <Col xs={5} lg={2}>
              <Navbar.Brand as={Link} to="/">
                
              </Navbar.Brand>
            </Col>
            <Col xs={6} lg={2}></Col>
            <Col xs={6} lg={2}></Col>
            <Col xs={6} lg={2}></Col>
          
            <Col xs={6} lg={3} className="text-end">
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link
                    as={Link}
                    to="/"
                    className={`nav-link ${activeLink === '/' ? 'active' : ''}`}
                    style={{ color: activeLink === '/' ? '#ffb700' : 'white' }}
                    onClick={() => handleLinkClick('/')}
                  ><b>Home</b></Nav.Link>
                  <Nav.Link
                    as={Link}
                    to="/about"
                    className={`nav-link ${activeLink === '/about' ? 'active' : ''}`}
                    style={{ color: activeLink === '/about' ? '#ffb700' : 'white' }}
                    onClick={() => handleLinkClick('/about')}
                  ><b>About</b></Nav.Link>
                  <Nav.Link
                    as={Link}
                    to="/members"
                    className={`nav-link ${activeLink === '/members' ? 'active' : ''}`}
                    style={{ color: activeLink === '/members' ? '#ffb700' : 'white' }}
                    onClick={() => handleLinkClick('/members')}
                  ><b>Members</b></Nav.Link>
                 
                  <Nav.Link
                    as={Link}
                    to="/achievements"
                    className={`nav-link ${activeLink === '/achievements' ? 'active' : ''}`}
                    style={{ color: activeLink === '/achievements' ? '#ffb700' : 'white' }}
                    onClick={() => handleLinkClick('/achievements')}
                  ><b>Achievements</b></Nav.Link>
                   
                   <Nav.Link
                    as={Link}
                    to="/memories"
                    className={`nav-link ${activeLink === '/memories' ? 'active' : ''}`}
                    style={{ color: activeLink === '/memories' ? '#ffb700' : 'white' }}
                    onClick={() => handleLinkClick('/memories')}
                  ><b>Memories</b></Nav.Link>
                </Nav>
                <Nav.Link
                    as={Link}
                    to="/contact"
                    className={`nav-link ${activeLink === '/contact' ? 'active' : ''}`}
                    style={{ color: activeLink === '/contact' ? '#ffb700' : 'white' }}
                    onClick={() => handleLinkClick('/contact')}
                  ><b>Contact</b></Nav.Link>
             
                
              </Navbar.Collapse>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
