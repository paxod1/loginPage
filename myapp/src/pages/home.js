import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Signup from './signup'
import Login from './login'

function home() {
  return (
    <div>  <BrowserRouter>
    <div>
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Link to={"Login"}><Nav.Link href="#features">Login</Nav.Link></Link>
          <Link to={"Signup"}><Nav.Link href="#pricing">Signup</Nav.Link></Link>
        </Nav>
      </Container>
    </Navbar>
      
    </div>
        <Routes>
          <Route path="/" element={<home />} />
          <Route path="login" element={<Login />} />
         <Route path="signup" element={<Signup />} />

        </Routes>
      </BrowserRouter></div>
  )
}

export default home