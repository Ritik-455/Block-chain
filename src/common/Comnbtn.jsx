import React from "react";

function Comnbtn(props) {
    return (
        <button className={` ${props.spacing} cmn-btn ff-inter fw-semibold text-capitalize text-16 lh-1936 text-white`}>
            {props.text}
        </button>
    )
}
export default Comnbtn