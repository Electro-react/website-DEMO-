import React from 'react';

const List= (props)=>{
    const Items = props.Items;
    const List= Items.map((element)=><p>{element}</p>);
    return <>
        <p style={{ fontSize: "2rem", color: "#006dd3"}}>{List}</p>
    </>
}   

export default List;