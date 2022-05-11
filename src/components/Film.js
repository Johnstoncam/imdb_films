import React from "react";


const Film = ({id,children, name}) =>{
    return (
        <>
            <p>{id}</p>
            <a href={children}>{name}</a>
            
        </>
    );
}

export default Film;