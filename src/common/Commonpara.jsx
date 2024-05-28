import React from "react";

function ComnPara(props) {
    return (
        <p
            className={` ${props.max_w_para} ${props.color} ${props.spacing}  mb-0 ff-inter fw-normal text-16 lh-25  opacty_80 `}
        >
            {props.text}
        </p>
    );
}

export default ComnPara;