import React, { useContext } from 'react'
import './nav.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AiOutlineHeart } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import { AppContext } from '../../App';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import logo from "../../assets/WhatsApp Image 2023-06-24 at 12.09.19.jpg"
const NavB = () => {
  const {login,setLogin}=useContext(AppContext)
  const {displayMessage}=useContext(AppContext)

  const stopLinks =(e)=>{
    if(!login){
      e.preventDefault()
      displayMessage("Please Login First")
    }
  }
  const clickOnLogOut =()=>{
    sessionStorage.clear()

    setLogin(false)
  }
  return (

    <Navbar  expand="lg" fixed="top">
    <Container fluid>
        <div className="links">
        <Link to="/my-favourite" onClick={stopLinks}> <AiOutlineHeart />
        </Link>

        <DropdownButton
      align="start"
      title={<CgProfile />}
      id="dropdown-menu-align-end"
    >
      <Dropdown.Item eventKey="1">{login ? <Link onClick={clickOnLogOut} to="/login">تسجيل الخروج</Link> :<Link to="/login">تسجيل الدخول</Link>}</Dropdown.Item>
      <Dropdown.Item eventKey="2"><Link to="/profile" onClick={stopLinks}>
        اعلاناتي</Link></Dropdown.Item>
      
      
    </DropdownButton>
        {/* <Link to="/profile" onClick={stopLinks}>
        <CgProfile /></Link> */}
        </div>
        
      <Navbar.Brand href="/"><img src={logo} alt="" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          {/* {login ? <Link onClick={clickOnLogOut} to="/login">تسجيل الخروج</Link> :<Link to="/login">تسجيل الدخول</Link>} */}
          
          <Link to="/ad-form" onClick={stopLinks}>اضافة اعلان جديد</Link>
     
       
        </Nav>

      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavB
