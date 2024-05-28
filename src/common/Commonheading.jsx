import React from "react";

function CommonHeading(props) {
    return <h2 className={` ${props.color} ${props.spacing} ff-inter mb-0 fw-900 text-64 lh-77 `} >{props.text}</h2>;
}

export default CommonHeading;