import React from 'react'
import {Navbar , Container , Nav} from "react-bootstrap"; 
import { useState, useEffect } from 'react';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/git-hub.png';
import navIcon3 from '../assets/img/docker-icon.png';
import { HashLink } from 'react-router-hash-link';
import {BrowserRouter as Router} from "react-router-dom";



const NavBar = () => {
    const [activeLink , setActiveLink]=useState('home');
    const [scrolled , setScrolled]=useState(false);


    useEffect(()=>{
      const onScroll =()=>{
        if(window.scrollY >50){
            setScrolled(true);
        }
        else{
            setScrolled(false);
        }
      }
      window.addEventListener("scroll", onScroll);

      return ()=> window.removeEventListener("scroll", onScroll);

    }, [])

   const onUpdateActiveLink =(value)=>{
    setActiveLink(value);
   }

 return (
  <Router>
    <Navbar expand="md" className={scrolled ? "scrolled" :"" }>
    <Container>
      <Navbar.Brand href="/">
      <h2 className='portfolio-logo'>My Portfolio</h2>
      
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav">
     <span className="navbar-toggler-icon"></span>
 </Navbar.Toggle>

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#home" className={activeLink === 'home' ?'active navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLink('home')}>Home
          </Nav.Link>
          <Nav.Link href="#skills" className={activeLink === 'skills' ?'active navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLink('skills')}>Skills</Nav.Link>
          <Nav.Link href="#projects" className={activeLink === 'projects' ?'active navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLink('projects')}>Projects</Nav.Link>
        </Nav>
        <span className='navbar-text'>
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/ali-haider-32773831a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BOAT%2BOutnSSu189WjdHJJsg%3D%3D"><img src={navIcon1} alt="" /></a>
                <a href="#"><img src={navIcon2} alt="" /></a>
                <a href="#"><img src={navIcon3} alt="" /></a>
            </div>
            <HashLink to='#connect'>
                <button><span>Let's Connect</span></button>
              </HashLink>
        </span>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </Router>
  )
}

export default NavBar;


