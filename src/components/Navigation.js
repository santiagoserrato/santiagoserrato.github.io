import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import {ReactComponent as Logo} from './../assets/images/logo.svg';

import {ReactComponent as LinkedInIcon} from './../assets/images/linkedInIcon.svg';
import {ReactComponent as GitHubIcon} from './../assets/images/gitHubIcon.svg';
import {ReactComponent as EmailIcon} from './../assets/images/emailIcon.svg';

class Navigation extends React.Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Brand href="#home">
              <Logo fill='#333' width='3rem'height='3rem'/>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#aboutMe">About Me</Nav.Link>
                  <Nav.Link href="#experience">Work Experience</Nav.Link>
                  <Nav.Link href="#education">Education</Nav.Link>
                </Nav>
                <Navbar.Text className="d-none d-lg-block">
                  <a href="https://www.linkedin.com/in/santiagoserrato/"target="__blank"><LinkedInIcon className="px-1" fill='#333' width='3rem'height='2rem' /></a>
                  <a href="https://github.com/santiagoserrato"target="__blank"><GitHubIcon className="px-1" fill='#333' width='3rem'height='2rem' /></a>
                  <a href="mailto:santiagoserrato@gmail.com"target="__blank"><EmailIcon className="px-1" fill='#333' width='3rem'height='2rem' /></a>
                </Navbar.Text>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        );
    }
}

export default Navigation;