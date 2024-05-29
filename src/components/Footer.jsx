import React from 'react'
import dext from '../assets/images/SVG/dextools.svg'
import x from '../assets/images/SVG/x.svg'
import telegram from '../assets/images/SVG/telegram_symbol.svg.svg'

function Footer() {
    return (
        <>
            <div className="bg-black">
                <div className="container py-footer">
                    <div className="row">
                        <div className="col-lg-4 col-sm-4 col-md-4 col-sm-6 col-6">
                            <h2 className=' ff-inter fw-900 text-79 lh-95 text-white mb-0'>G<span className=' color-yellow'>G</span></h2>
                            <p className=' ff-inter fw-normal text-16 lh-25 text-white mb-0 mt-md-41'>@copyright2024</p>
                        </div>
                        <div className="col-lg-4 col-xl-2 col-sm-6 col-md-4 col-6 ">
                            <div className="d-flex gap-66">
                                <div className="line-footer"></div>
                                <ul>
                                    <li className=' ff-inter fw-bold text-16 lh-25 text-white mb-0'>QUICK LINKS</li>
                                    <li className='mt-33'><a href="https://x.com/?lang=en"  target=' _blank' className=' ff-inter fw-normal text-16 lh-25 text-white '>Twitter</a></li>
                                    <li className='mt-17'><a href="https://telegram.org/" target=' _blank' className=' ff-inter fw-normal text-16 lh-25 text-white '>Telegram</a></li>
                                    <li className='mt-17'><a href="https://www.dextools.io/app/en/pairs" target=' _blank' className=' ff-inter fw-normal text-16 lh-25 text-white '>DexTools</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 pt-4 pt-md-0 col-xl-6 col-md-4 col-12  d-flex align-items-start  justify-content-md-end mt-3">
                            <div className="d-flex gap-21">
                                <div className=""><a href="https://www.dextools.io/app/en/pairs" target=' _blank'><img src={dext} alt="dext" /></a></div>
                                <div className=""><a href=" https://x.com/?lang=en" target=' _blank'><img src={x} alt="x-logo" /></a></div>
                                <div className=""><a href=" https://telegram.org/" target=' _blank' ><img src={telegram} alt="telegram" /></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer