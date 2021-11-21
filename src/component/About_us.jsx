import React from 'react';
import Paragraph from './Paragraph';
import WithLeftimage,{WithRightimage} from "./Table_content";
import "../App.css";
import Card from "./Card";
import Footer from "./Footer";
import List from "./List";

const title_css={
    textAlign:"center"
}

const About_us = ()=> {
    return <> 
    <Paragraph  title       = "We Coder Your Ideas!" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
    mollit anim id est laborum" /><br/>
        <h1 style           = {{ padding: "0rem 0rem 6rem 5rem", fontSize: "30pt", fontWeight: "bold", color: "#116063"}}>Reason to Hire Remote Developers from us</h1><br/>
    
    <WithLeftimage number   = "01" subtitle="Strict Screening Vetting Process" source="./image/pointer.jpg"  alternate="img" Left_image="./image/left.jpg" Left_image_alternate="Left"
    data                    = {[<p><span style={{fontWeight:"bold"}} >Collecting Diverse Resumes</span><br/>
    <span style             = {{position:"relative",top:"2rem"}} >The resume goes through the filtering process on various parameters.</span></p>,
    <section><span style    = {{fontWeight:"bold"}}>Work with the Best</span><br/>
    <span style             = {{position:"relative",top:"2rem"}}>Carry out your operations with the best chosen ones.</span></section>,
    <section><span style    = {{fontWeight:"bold",paddingBottom:"10px"}}>Video Interview and Skill Test for Eligible Candidates</span><br/>
    <span style             = {{position:"relative",top:"2rem"}}>Developers interview with senior engineers at leading companies. using Silicon Valley-caliber technicaland behavioral assessments.</span></section>]}/>
    
    <WithRightimage number  = "02" subtitle="Risk-Free Trail for Transparency" Right_image="./image/right.jpg" Right_image_alternate="right"
    data                    = {[<p><span style={{fontWeight:"bold",position:"relative",bottom:"2rem"}} >Our Zero-risk platform with one-week of free trial period ensures top quality end product delivered through-</span><br/>
    <span style             = {{padding:"2rem 0rem 2rem 0rem"}}>The resume goes through the filtering process on various parameters.</span><br/>
    <ol><li style           = {{padding:"2rem 0rem 2rem 0rem"}}>Transparent evalution process on various parameter.</li>
    <li style               = {{padding:"2rem 0rem 2rem 0rem"}}>No bank Details for One Week.</li>
    <li style               = {{padding:"2rem 0rem 2rem 0rem"}}>Innovation technical assistance.</li></ol></p>]} />
    
    <WithLeftimage number   = "03" subtitle="Fast End Delivery of the Product as Required"  Left_image="./image/left.jpg"  Left_image_alternate="Left"
            data            = {[<p><span style={{ position: "relative", top: "2rem"  }}>Lorem ipsum dolor sit amet,
    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum</span></p>]} />
    <h1 style               = {title_css}> Connect With Top Remote Developers anytime</h1>
    <img src                = "./image/Map.jpg" alt="map" style={{width: "100%", height:"auto",paddingLeft:"6rem"}} />
    <h1 style               = {title_css}>What Sets Us Apart</h1><br></br>
    <div style              = {{display: 'flex',justifyContent:"center",flexWrap:"nowrap"}} >
    <Card source            = "./image/1.jpg" alt="card_img" cardtitle="Technology Spectrum" />
    <Card source            = "./image/2.jpg" alt="card_img" cardtitle="Risk Free Policy"/>
    <Card source            = "./image/3.jpg" alt="card_img" cardtitle="Top 1%"/>
    <Card source            = "./image/4.jpg" alt="card_img" cardtitle="Easy & Comfortable"/>
    <Card source            = "./image/5.jpg" alt="card_img" cardtitle="Quality Guaranteed"/>
    <Card source            = "./image/6.jpg" alt="card_img" cardtitle="Super Fast Delivery"/>
    </div>
    <h1 style               = {title_css}>Hiring For A Specific Skill?</h1>
        <p id               = "Paragraph" style={{ textAlign: "center", color: "#90C0C0"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
    mollit anim id est laborum</p>
    <div style              = {{display: 'flex',padding: "6rem 0rem 6rem 6rem",flexWrap:"nowrap"}}>
    <List Items             = {["Java Developers","IOS Developer","Nodejs Developer","graphQL Developer"]}/>
    <List Items             = {["Java Developers","IOS Developer","Nodejs Developer","graphQL Developer"]}/>
    <List Items             = {["Java Developers","IOS Developer","Nodejs Developer","graphQL Developer"]}/>
    <List Items             = {["Java Developers","IOS Developer","Nodejs Developer","graphQL Developer"]}/>
    </div>
    <Footer/>
    </>};
export default About_us;  