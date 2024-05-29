import React from 'react'
import { useState } from 'react';
import dext from '../assets/images/SVG/dextools.svg'
import x from '../assets/images/SVG/x.svg'
import telegram from '../assets/images/SVG/telegram_symbol.svg.svg'
import Comnbtn from '../common/Comnbtn';
import { Navcross, Navline } from '../common/Icon';


function Navbar() {
    const [show, setfirst] = useState(false);

    if (show === true) {
        document.body.classList.add('overflow_hidden')
    }
    else {
        document.body.classList.remove('overflow_hidden')
    }

    return (
        <>
            <div className="container pt-40">
                <nav className=' d-flex justify-content-between w-100 align-items-center'>
                    <p className=' text-white ff-inter fw-900 text-40 lh-48 mb-0 cursor-pointer'>Gxxx Gxxxxxx</p>
                    <div className={`${show ? "end-0" : "right_100"} d-flex gap-5 mobile-view`}>
                        <div className="d-flex gap-21 align-items-center">
                            <div className=""><a href="https://www.dextools.io/app/en/pairs" target=' _blank'><img src={dext} alt="dext" /></a></div>
                            <div className=""><a href=" https://x.com/?lang=en" target=' _blank'><img src={x} alt="x-logo" /></a></div>
                            <div className=""><a href=" https://telegram.org/" target=' _blank' ><img src={telegram} alt="telegram" /></a></div>
                        </div>
                        <Comnbtn text="Buy On Uniswap" />
                    </div>
                    <div className="menu z-5 d-lg-none" onClick={() => {
                        setfirst(!show);
                    }}>
                        <span>{show === false ? <Navline /> : <Navcross />}</span>
                    </div>
                </nav>
            </div >
        </>
    )
}

export default Navbar