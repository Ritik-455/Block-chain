import React from 'react'
import CommonHeading from '../common/Commonheading'
import { card } from '../common/Helper'
import laptop from '../assets/images/SVG/laptop.svg'
import mobile from '../assets/images/SVG/mobile.svg'
import dext from '../assets/images/SVG/dextools.svg'
import x from '../assets/images/SVG/x.svg'
import telegram from '../assets/images/SVG/telegram_symbol.svg.svg'

function News() {
    return (
        <>
            <div className="bg-news position-relative">
                <div className="container py-news">
                    <CommonHeading text="LATEST NEWS" color=" text-black text-center" />
                    <div className="d-flex gap-20 justify-content-center mt-card flex-wrap">
                        {card.map((data, index) => (
                            <>
                                <div className="news-box">
                                    <div className="d-flex gap-14 align-items-center">
                                        <img src={data.img} alt="img" />
                                        <div className="">
                                            <div className="d-flex gap-1">
                                                <p className=' ff-inter fw-900 text-16 lh-1936 text-black mb-0'>{data.name}</p><img src={data.verify} alt="verify" />
                                            </div>
                                            <p className=' ff-inter fw-normal text-14 lh-25 text-black opacty_80 mb-0'>{data.about}</p>
                                        </div>
                                    </div>
                                    <p className=' ff-inter fw-normal text-16 lh-25 text-black opacty_80 mb-0 mt-20'>{data.para}</p>
                                    <div className="d-flex justify-content-between mt-3 pr-22 align-items-center">
                                        <div className=" d-flex align-items-center gap-1">
                                            <img src={data.commentimg} alt="comment" />
                                            <p className=' ff-inter fw-normal text-14 lh-17 text-black mb-0'>{data.comment}</p>
                                        </div>
                                        <div className=" d-flex align-items-center gap-1">
                                            <img src={data.Retweetimg} alt="comment" />
                                            <p className=' ff-inter fw-normal text-14 lh-17 text-black mb-0'>{data.Retweet}</p>
                                        </div>
                                        <div className=" d-flex align-items-center gap-1">
                                            <img src={data.like} alt="comment" />
                                            <p className=' ff-inter fw-normal text-14 lh-17 text-black mb-0'>{data.likecount}</p>
                                        </div>
                                        <div>
                                            <img src={data.share} alt="comment" />
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))}
                    </div>
                </div>
                <div className="position-absolute lap-pos d-none d-xl-block">
                    <img src={laptop} alt="laptop" />
                </div>
                <div className="position-absolute mobile-pos d-none d-xl-block">
                    <img src={mobile} alt="mobile" />
                </div>
                <div className="ylw-layer2">
                    <div className="container d-flex justify-content-sm-between flex-wrap">
                        <div className="d-flex gap-21 align-items-center">
                            <img src={x} alt="x" className=' cursor-pointer' />
                            <p className=' ff-inter fw-semibold text-48 lh-589 text-white mb-0'>twitter</p>
                        </div>
                        <div className="d-flex gap-21 align-items-center">
                            <img src={telegram} alt="telegram"  className=' cursor-pointer'/>
                            <p className=' ff-inter fw-semibold text-48 lh-589 text-white mb-0'>Telegram</p>
                        </div>
                        <div className="d-flex gap-21 align-items-center">
                            <img src={dext} alt="x" className=' cursor-pointer' />
                            <p className=' ff-inter fw-semibold text-48 lh-589 text-white mb-0'>DEXTOOLS</p>
                        </div>
                    </div>``
                </div>
            </div>
        </>
    )
}

export default News