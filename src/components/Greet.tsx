import React from "react";
const Greet = props => {
    console.log(props.name, props.lastname);
    return (
        <div>
            <h1>Hello {props.name} {props.lastname}</h1>
            {props.children}
        </div>
    )

}

export default Greet;