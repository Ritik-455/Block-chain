import React from 'react'
import Navbar from './Navbar'
import Comnbtn from '../common/Comnbtn'
import hero from '../assets/images/PNG/gg-hero-img.png'
import dext from '../assets/images/SVG/dextools.svg'
import x from '../assets/images/SVG/x.svg'
import telegram from '../assets/images/SVG/telegram_symbol.svg.svg'

function Header() {
    return (
        <>
            <div className="bg-black position-relative">
                <Navbar />
                <div className="container py-hero position-relative z-2">
                    <h2 className=' ff-inter fw-900 text-108 lh-130 text-white mb-0'>G<span className=' color-yellow'>G</span></h2>
                    <p className=' ff-inter fw-semibold text-20 lh-24 mb-0 text-white'>Join The <span className=' color-yellow'>Worldwide Blockchain</span> Protest Against Corrupt <span className=' d-lg-block'> Government Bodies</span></p>
                    <div className=" d-flex gap-4 mt-62">
                        <Comnbtn text="Buy $GrayGensler" />
                        <Comnbtn text="How To Buy?" />
                    </div>
                    <button className=' ff-inter fw-normal text-20 lh-30 text-white head-btn d-flex gap-4 align-items-center mt-36'>dwqjddj324dnewdne3dewrrets <span><svg width="38" height="39" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M31.3499 14.4018C31.2753 14.2311 31.171 14.0751 31.0417 13.9411L21.6073 4.50661C21.4732 4.37733 21.3172 4.27297 21.1465 4.19842C21.0994 4.17641 21.049 4.16383 20.9987 4.14653C20.8672 4.10176 20.7302 4.07479 20.5915 4.06634C20.5585 4.06319 20.5286 4.0459 20.4956 4.0459H9.4887C7.75434 4.0459 6.34389 5.45635 6.34389 7.19071V32.3492C6.34389 34.0836 7.75434 35.4941 9.4887 35.4941H28.3576C30.092 35.4941 31.5024 34.0836 31.5024 32.3492V15.0528C31.5024 15.0197 31.4851 14.9899 31.482 14.9553C31.4743 14.8164 31.4473 14.6794 31.4018 14.548C31.3861 14.4977 31.3719 14.449 31.3499 14.4018ZM26.1342 13.4803H22.068V9.4141L26.1342 13.4803ZM9.4887 32.3492V7.19071H18.9232V15.0528C18.9232 15.4698 19.0888 15.8697 19.3837 16.1646C19.6786 16.4595 20.0785 16.6252 20.4956 16.6252H28.3576L28.3607 32.3492H9.4887Z" fill="white" />
                        <path d="M12.6338 19.7701H25.2131V22.9149H12.6338V19.7701ZM12.6338 26.0597H25.2131V29.2045H12.6338V26.0597ZM12.6338 13.4805H15.7786V16.6253H12.6338V13.4805Z" fill="white" />
                    </svg>
                    </span></button>
                </div>
                <div className="position-absolute bottom-0 end-0">
                    <img src={hero} alt="hero" className='img-op' />
                </div>
            </div>
            <div className="ylw-layer">
                <div className="container d-flex justify-content-sm-between flex-wrap">
                    <div className="d-flex gap-21 align-items-center">
                        <img src={x} alt="x" />
                        <p className=' ff-inter fw-semibold text-48 lh-589 text-white mb-0'>twitter</p>
                    </div>
                    <div className="d-flex gap-21 align-items-center">
                        <img src={telegram} alt="telegram" />
                        <p className=' ff-inter fw-semibold text-48 lh-589 text-white mb-0'>Telegram</p>
                    </div>
                    <div className="d-flex gap-21 align-items-center">
                        <img src={dext} alt="x" />
                        <p className=' ff-inter fw-semibold text-48 lh-589 text-white mb-0'>DEXTOOLS</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header