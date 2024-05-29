import React from 'react'
import toplayer from '../assets/images/PNG/top-layer-2.png'
import CommonHeading from '../common/Commonheading'
import bottomblacklayer from '../assets/images/PNG/bottomlayer.png'
import line1 from '../assets/images/SVG/line1.svg'
import line2 from '../assets/images/SVG/line2.svg'
import line3 from '../assets/images/SVG/line3.svg'
import line4 from '../assets/images/SVG/line4.svg'
import line5 from '../assets/images/SVG/line5.svg'
import Slider from "react-slick";

function Roadmap() {
    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        arrows: false,
        speed: 3000,
        autoplaySpeed: 0,
        slidesToShow: 5,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 820,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },

            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <>
            <div className=""><img src={toplayer} alt="toplayer" className=' w-100' /></div>
            <div className="bg-black my-neg-3 pt-68">
                <CommonHeading text="ROADMAP" color="text-white text-center" />
                <p className=' ff-inter fw-normal text-16 lh-md-30 text-white opacity-75 text-center mt-lg-20 mb-0'>Our roadmap isn't just a journey; it's a comedic adventure  through the cryptoverse, filled with twists, turns, and plenty <span className=' d-lg-block'> of  laughs along the way. Here's a glimpse into what the future holds  for Let's Hug GG ($LHGG)</span></p>
                <Slider {...settings} className=' py-road'>
                    <div className=" d-flex gap-2 align-items-end">
                        <img src={line1} alt="line1" />
                        <div className="">
                            <p className=' ff-inter fw-900 text-24 lh-29 text-white mb-0'>Token Launch<span className='d-block'> (Q1 2024)</span></p>
                            <p className=' ff-inter fw-normal text-16 lh-30 text-white opacity-75 mb-0 mt-2'>Launch $LHGG token,<span className=' d-block'> establish initial  liquidity.</span></p>
                        </div>
                    </div>
                    <div className=" d-flex gap-18 align-items-center">
                        <img src={line2} alt="line2" />
                        <div className="">
                            <p className=' ff-inter fw-900 text-24 lh-29 text-white mb-0'>Community <span className='d-block'> Building (Q2 2024)</span></p>
                            <p className=' ff-inter fw-normal text-16 lh-30 text-white opacity-75 mb-0 mt-2'>Grow vibrant community<span className=' d-block'> through humor and </span> <span className="d-block">engagement</span></p>
                        </div>
                    </div>
                    <div className=" d-flex gap-18 align-items-center">
                        <img src={line3} alt="line3" />
                        <div className="">
                            <p className=' ff-inter fw-900 text-24 lh-29 text-white mb-0'>Governance <span className="d-block">Implementation</span> <span className='d-block'> (Q3 2024)</span></p>
                            <p className=' ff-inter fw-normal text-16 lh-30 text-white opacity-75 mb-0 mt-2'>Introduce community  <span className=' d-block'> governance mechanisms.</span></p>
                        </div>
                    </div>
                    <div className=" d-flex gap-30 align-items-end">
                        <img src={line4} alt="line4" />
                        <div className="">
                            <p className=' ff-inter fw-900 text-24 lh-29 text-white mb-0'> Partnerships and  <span className="d-block">Influencer </span> <span className='d-block'>Collaborations (Q4</span> <span className="d-block">2024)</span></p>
                            <p className=' ff-inter fw-normal text-16 lh-30 text-white opacity-75 mb-0 mt-2'> Forge  strategic partnerships  <span className=' d-block'> and collaborations.</span></p>
                        </div>
                    </div>
                    <div className=" d-flex gap-21 align-items-center">
                        <img src={line5} alt="line4" />
                        <div className="">
                            <p className=' ff-inter fw-900 text-24 lh-29 text-white mb-0'> Utility Expansion <span className="d-block">(Q1 2025)</span></p>
                            <p className=' ff-inter fw-normal text-16 lh-30 text-white opacity-75 mb-0 mt-2'> Forge  strategic partnerships  <span className=' d-block'> and collaborations.</span></p>
                        </div>
                    </div>
                </Slider>
            </div>
            <div className=""><img src={bottomblacklayer} alt="layer" className=' w-100' /></div>
        </>
    )
}

export default Roadmap