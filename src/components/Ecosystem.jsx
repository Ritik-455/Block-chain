import React from 'react'
import newsman from '../assets/images/PNG/ecoman.png'
import Headicon from './Headicon'
import CommonHeading from '../common/Commonheading'
import ComnPara from '../common/Commonpara'
import chart from '../assets/images/PNG/chart.png'
import glass from '../assets/images/SVG/glasses.svg'


function Ecosystem() {
    return (
        <>
            <div className="bg-ecosystem position-relative">
                <div className="container py-eco">
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <img src={newsman} alt="newsman" className=' max-w-565 w-100' />
                        </div>
                        <div className="col-12 col-lg-6 d-flex align-items-center mt-4">
                            <div className="">
                                <Headicon/>
                                <CommonHeading text="ECOSYSTEM" color="text-black" spacing="mt-md-13"/>
                                <ComnPara spacing="mt-md-3" text="The $LHGG ecosystem is built upon the principles of inclusivity,  humor, and innovation. Our community-driven approach  empowers members to actively participate in governance,  decision-making, and promotional activities. Through social  media campaigns, memes, and creative content, we seek to  amplify the message of embracing humor in the crypto space  and challenging conventional narratives. Together, we aspire to  foster a vibrant and engaging ecosystem where laughter reigns  supreme." color="text-black" max_w_para="max-w-550"/>
                                <button className=' ff-inter fw-semibold text-16 lh-1936 ylw-btn mt-33'>Buy $GrayGensler</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="position-absolute chart-pos d-none d-lg-block">
                    <img src={chart} alt="chart" />
                </div>
                <div className="position-absolute glasses-pos2 d-none d-lg-block">
                    <img src={glass} alt="glass" />
                </div>
            </div>
        </>
    )
}

export default Ecosystem