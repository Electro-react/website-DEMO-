import React, { useState, useEffect } from 'react'
import "./App.css"
import Header from "./component/Header"
import { BrowserRouter as Router } from 'react-router-dom'




const App=()=>{
    return <><Router>
        <Header />
    </Router>
    </>}

export default App;
