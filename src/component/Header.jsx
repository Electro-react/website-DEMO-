import React from 'react';
import {Route, NavLink, Routes} from 'react-router-dom';
import Blog from './Contact_Us'
import About_us from './About_us';
import Contact_Us from './Contact_Us';
import "../App.css";
import ContentBox from './ContentBox';
import Email_Finder from "./Email_Finder";

const header_element = { padding: "15px", textDecoration: "none", color: "#504e4e" }

const Header = ()=> {
    return < > <li class="list"> 
        <p  class="LOGOHOLDER">LOGO HOLDER</p>
        <NavLink exact to="/" activceClassName="active" style={header_element} >About</NavLink>
        <NavLink exact to="/Contact_Us" style={header_element} >Content Us</NavLink>
        <NavLink exact to="/Blog"   style={header_element}>Blog</NavLink>
        <NavLink exact to="/Email_Finder"   style={header_element}>Email Finder</NavLink>
        <ContentBox     style={{float: 'right'}} id="ContentBox" data="Apply as coder"/>
        <ContentBox data="Hire a coder" id="ContentBox"/>
        </li>
        <Routes >
        <Route exact path="/" element={<About_us />} />
        <Route exact path="/Contact_Us" element={<Contact_Us/>}/>
        <Route exact path="/Email_Finder" element={<Email_Finder/>}/>
    </Routes> </>}
export default Header;
