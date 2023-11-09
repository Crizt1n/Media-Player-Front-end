import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
        <Navbar className="bg-body-tertiary bg-dark">
        <Container>
          <Navbar.Brand href="#home">
            <Link to ={'/'} style={{textDecoration:'none',color:'white', fontSize:'30px'}}>
            <i class="fa-solid fa-video fa-beat text-warning me-3"></i>{''}Media Player
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header