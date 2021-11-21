import React from 'react';
const Footer_style={
    backgroundColor       : "#034694",
    display               : 'grid',
    padding               : "4rem 5.1rem 4rem 4rem",
    gridTemplateColumns   : "33% 33% 32%"
}
const main_footer = {
    borderTop             : "2px solid black",
    backgroundColor       : "#034694",
    display               : "flex",
    gridTemplateColumns   : "50% 50%",
    fontSize              : "22pt",
    padding               : "2rem 5.1rem 2rem 4rem",
    color                 : "#FFFFFF"
}


const Footer= (props)=>{
    return<>
        <div style        = {Footer_style}>
        <div>
                <p style  = {{ fontWeight: "bold", color: "#FFFFFF", fontSize: "18pt"}}>WE</p>
                <p style  = {{ color: "#E5E4E2"}}> Find a mantor to help you in real time</p>
                <p style  = {{ fontWeight: "bold", paddingTop: "3rem", color: "#FFFFFF", fontSize: "18pt" }}>Hire Remote  Developers</p>
                <p style  = {{ color: "#E5E4E2" }} B>Hire world_class </p>
                <p style  = {{ fontWeight: "bold", paddingTop: "4rem", color: "#FFFFFF", fontSize: "18pt" }}>Apply as a Coder</p>
                <p style  = {{ color: "#E5E4E2" }} B> Be a part of our global community of remote developers, designers, project managers</p>
        </div>

            <div style    = {{ display: 'grid', gridTemplateColumns: "20% 80%", color: "#FFFFFF", lineHeight: "3rem", fontSize: "18pt" }}>
            <p></p>
            <p>Hire Java Developer<br/>
            Hire IOS developer<br/>
            Hire NodeJS developer<br/>
            Hire graphQL developer<br/>
            Hire Java Developer<br/>
            Hire IOS developer<br/>
            Hire NodeJS developer<br/>
            Hire graphQL developer<br/>
            </p>
        </div>

        <div>
                <p style  = {{ fontWeight: "bold", color: "#FFFFFF", fontSize: "18pt"}}>About us</p>
                <p style  = {{ color: "#E5E4E2" }}>Curious About Us? Know about us.</p>
                <p style  = {{ fontWeight: "bold", paddingTop: "4rem", color: "#FFFFFF", fontSize: "18pt"  }}>Contact Us</p>
                <p style  = {{ color: "#E5E4E2" }}>Get in touch with us with just a few clicks.</p>
                <p style  = {{ fontWeight: "bold", paddingTop: "4rem", color: "#FFFFFF", fontSize: "18pt"  }}>Write For Us</p>
                <p style  = {{ color: "#E5E4E2" }}>Fill a simple form and start posting  your content on our page.</p>
                <p style  = {{ fontWeight: "bold", paddingTop: "4rem", color: "#FFFFFF", fontSize: "18pt" }}>One-Week Risk-Free Trail</p>
                <p style  = {{ color: "#E5E4E2" }}>Read about our 1-week risk-free trial policy.</p>
            </div>
        </div>
        <div style        = {main_footer}>
            <p>LOGOHOLDER</p>
            <p style      = {{textAlign: "right"}}>Policy Policy | Terms of Service | FAQs</p>
        </div>
    </>
}   

export default Footer;