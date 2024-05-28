import React from 'react'
import aboutman from '../assets/images/PNG/about-img.webp'
import Headicon from './Headicon'
import CommonHeading from '../common/Commonheading'
import ComnPara from '../common/Commonpara'
import glasses from '../assets/images/SVG/glasses.svg'

function About() {
    return (
        <>
            <div className="bg-about position-relative">
                <div className="container py-about">
                    <div className="row">
                        <div className="col-12 col-lg-6 d-flex align-items-center">
                            <img src={aboutman} alt="aboutman" className=' w_100' />
                        </div>
                        <div className="col-12 col-lg-6">
                            <Headicon />
                            <CommonHeading text="ABOUT US" color="text-black" spacing="mt-lg-26" />
                            <ComnPara text=" In the ever-evolving landscape of cryptocurrency, where markets  can swing on a tweet and sentiments wield as much power as  technical analysis, one figure has recently stepped into the  spotlight: Gary Gensler, or as we affectionately call him, GG. With his  recent comments on Bitcoin, Gensler stirred the pot of fear,  uncertainty, and doubt (FUD), sending shockwaves through the  crypto community." color="black" max_w_para=" max-w-550" spacing=" mt-2 mt-lg-3" />
                            <ComnPara text=" But fear not, for in the midst of this whirlwind of emotions, there  emerges a beacon of levity and laughter: Let's Hug GG ($LHGG).Hug GG We're not your average token; we're a humorous response to the  serious business of crypto. Inspired by Gensler's remarks and the  ensuing FUD frenzy, $LHGG aims to inject a healthy dose of humor  into the conversation while playfully encouraging individuals to  consider selling their Bitcoins." color="black" max_w_para=" max-w-550" spacing=" mt-2 mt-lg-3" />
                            <ComnPara text=" ou see, we believe that in times of uncertainty, a good laugh can be  the best antidote. And what better way to address fear than with a  hug—from behind, of course! Our slogan,	&quot;If you sell your BTC, we'll  let you hug GG from behind so tightly,&quot;embodies our playful  approach to tackling the anxiety surrounding Bitcoin and the  broader crypto market." color="black" max_w_para=" max-w-550" spacing=" mt-2 mt-lg-3" />
                            <ComnPara text=" So, buckle up and get ready for a rollercoaster ride of giggles, hugs,  and maybe even a few profitable trades along the way. Because in  the world of $LHGG, laughter isn't just the best medicine—it's the  best investment strategy." color="black" max_w_para=" max-w-550" spacing=" mt-2 mt-lg-3" />
                        </div>
                    </div>
                </div>
                <p className=' ff-grands fw-900 text-322 lh-32 color-grey mb-0 position-absolute top-text-ellips d-none d-lg-block'>I love FUDing</p>
                <p className=' ff-grands fw-900 text-322 lh-32 color-grey mb-0 position-absolute top-text-ellips2 d-none d-xl-block'>I love FUDing</p>
                <p className=' ff-grands fw-900 text-322 lh-32 color-grey mb-0 bottom-ellips-pos position-absolute d-none d-lg-block'>I love FUDing</p>
                <div className="position-absolute glasses-pos d-none d-lg-block">
                    <img src={glasses} alt="glasses" />
                </div>
            </div>
        </>
    )
}

export default About