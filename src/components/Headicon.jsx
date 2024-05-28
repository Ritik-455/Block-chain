import React from 'react'
import blkdext from '../assets/images/SVG/blackdexttool.svg'
import horse from '../assets/images/SVG/hores.svg'
import twitter from '../assets/images/SVG/twitter.svg'
import tel from '../assets/images/SVG/blacktele.svg'
import ship from '../assets/images/SVG/ship.svg'

function Headicon() {
    return (
        <>
            <div className="d-flex gap-21 align-items-center">
                <div className=" cursor-pointer "> <img className=' icon-width' src={blkdext} alt="blkdext" /></div>
                <div className=" cursor-pointer "> <img className=' icon-width' src={horse} alt="blkdext" /></div>
                <div className=" cursor-pointer "> <img className=' icon-width' src={twitter} alt="twitter" /></div>
                <div className=" cursor-pointer "> <img className=' icon-width' src={tel} alt="blkdext" /></div>
                <div className=" cursor-pointer "> <img className=' icon-width' src={ship} alt="blkdext" /></div>
            </div>
        </>
    )
}

export default Headicon