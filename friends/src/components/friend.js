import React from 'react';


export default function Friend(props){

    return(
    <div>
        <p>{`name:${props.name}`}</p>
        <p>{`age:${props.age}`}</p>
        <p>{`email:${props.email}`}</p>
    </div>
    )
}