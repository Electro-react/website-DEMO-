import React from 'react';
import "../App.css";

let styles                            = {        //style for left list
    width                             : "50%",
    height                            : "auto",
    background                        : 'linear-gradient(to right,#e9f1f7 10%,white 10%)',
    fontSize                          : "22pt",
    position                          : 'relative',
    left                              : "40%",
    color                             : "black",
    fontFamily                        : "Arial"
  };

  let styles2                         = {   //style for right list  
    margin                            : "0%",
    width                             : "50%",
    height                            : "auto",
    background                        : 'linear-gradient(to right,#e9f1f7 10%,white 10%)',
    fontSize                          : "22pt",
    position                          : 'relative',
    left                              : "10%",
    color                             : "black",
    fontFamily                        : "Arial",
  };
  let image_left= { 
        width                         : "25%",
        height                        : "40%",
        position                      : "absolute",
        left                          : "8%"
  }
  let image_right= {
    
    width                             : "25%",
    height                            : "40%",
    position                          : "absolute",
    right                             : "8%"
}


const WithLeftimage=(props)=>{
    const BLOCK                       = {display: 'block'};
    const NONE                        = {display: 'none'};
    let pointer_style                 = {width: "20%", height: "25%",float:"left",padding: "20px 20px 30px 0px"};
    const source                      = props.source;
    const Left_image                  = props.Left_image;
    source? pointer_style             = {...pointer_style,...BLOCK}: pointer_style= {...pointer_style,...NONE};
    Left_image ? image_left           = {...image_left,...BLOCK} : image_left= {...image_left,...NONE}
    const data                        = props.data;
    
    const list                        = data.map((value)=>{return<>
    <p style                          = {{display:"flex", gridTemplateColumns: "30% 70%",padding:"2rem 2rem 1rem 7rem"}}>
    <img src                          = {source} style={pointer_style} alt={props.alternate} >
    </img><span style={{paddingTop:"22pt",align:"left"}}>{value}</span></p><br/>
    </>})
    
    return<><section>
    <img style                        = {image_left} src={Left_image} alt={props.Left_image_alternate} />
      <article style={styles}><h1 style={{ paddingTop: "30px", paddingRight: "60px", color: "#0053a0"}} >
        <span style={{ paddingRight: "3rem", paddingLeft: "1rem", textAlgin: "center", color: "#006dd3"}} >{props.number}</span>
    {props.subtitle}</h1><br/>{list}</article></section>
    </>
    }


const WithRightimage=(props) =>{
    const BLOCK                       = {display: 'block'};
    const NONE                        = {display: 'none'};
    const FLEX                        = {display:"flex", gridTemplateColumns: "50% 50%"}
    let pointer_style                 = {width: "20%", height: "25%",float:"left",padding: "20px 20px 30px 0px"};
    let right_para_style              = {}
    const source                      = props.source;
    const Right_image                 = props.Right_image;
    source ? pointer_style            = {...pointer_style,...BLOCK} : pointer_style= {...pointer_style,...NONE};
    Right_image ? image_right         = {...image_right,...BLOCK} : image_right= {...image_right,...NONE};
    Right_image ? right_para_style    = {...right_para_style,...FLEX} : right_para_style= {...right_para_style,...BLOCK};
    const data                        = props.data;

    const list=data.map((value,index)=>{
    return<><p style                  = {{display:"flex", gridTemplateColumns: "20% 80%",padding:"2rem 2rem 1rem 6rem"}}>
    <img src                          = {source} style={pointer_style} alt={props.alternate}/>
    <span style                       = {{paddingTop:"22pt",align:"left"}}>{value}</span></p><br/>
    </>})

    return<><section style            = {right_para_style}>
      <article style={styles2}><h1 style={{ paddingTop: "30px", paddingRight: "60px", color: "#0053a0"}}>
        <span style={{ paddingRight: "3rem", paddingLeft: "1rem", textAlgin: "center", color: "#006dd3"}} >{props.number}</span>
    {props.subtitle}</h1><br/>{list}
    </article><img style={image_right} src={Right_image} alt={props.Right_image_alternate} /></section>
    </>
}


export default WithLeftimage;
export { WithRightimage};