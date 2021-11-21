import React from 'react';
import VideoCard from './VideoCard';
import "../App.css";
import ContentBox from './ContentBox';

const Paragraph =(props) =>{
    return <>
   
    <div id="Paragraph"style={{ paddingTop:"10%",paddingBottom:"10px"}}>
            <section style={{ paddingTop: "3%" }}> <h1 style={{ color:"#116063",paddingBottom:"35px"}}>{props.title}</h1>
                <p style={{ paddingBottom: "35px", color: "#90C0C0"}}>{props.paragraph}</p>
                <ContentBox data="Try our one week trial" Style={{ marginTop: "30px", padding: "60px 60px 0px 0px"}} /></section>
    < VideoCard  />
    </div></>
}
export default Paragraph;