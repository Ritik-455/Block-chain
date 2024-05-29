import React from 'react'
import { useState } from 'react';
import dext from '../assets/images/SVG/dextools.svg'
import x from '../assets/images/SVG/x.svg'
import telegram from '../assets/images/SVG/telegram_symbol.svg.svg'
import Comnbtn from '../common/Comnbtn';


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
                        <svg className={`${show ? "d-none" : "d-block"}`} xmlns="http://www.w3.org/2000/svg" width="40" height="30" fill="#FFF" class="bi bi-list" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                        </svg>
                        <svg className={`${show ? "d-block" : "d-none"}`} xmlns="http://www.w3.org/2000/svg" width="40" height="30" fill="#FFF" class="bi bi-x-lg" viewBox="0 0 16 16">
                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                        </svg>
                    </div>
                </nav>
            </div >
        </>
    )
}

export default Navbar