import React, { useState } from 'react';
import "../App.css"

const Feedback=()=>{
    const [state, setstate] = useState("");
    const {Feedback, setFeedback} = useState("");
    const Event =(data)=>{
        setstate(data.target.value);
    }
    const SendFeedback=()=>{
        return setFeedback(state);
    }
    return <><br/><p>
    <input type="chatbox" className='col-4' style={{minHeight:"100px",color:"black"}} onChange={Event} />
    <button onClick={SendFeedback} className='col-2' style={{color:"black" ,fontWeight:"bold0",textSize:"80"}} >Submit Feedback</button>
    <p>Your feedback:{Feedback}</p> </p>
    </>
}
export default Feedback;