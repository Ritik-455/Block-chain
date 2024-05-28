import React from 'react'
import CommonHeading from '../common/Commonheading'
import Commonpara from '../common/Commonpara'
import toplayer from '../assets/images/PNG/black-top-layer.png'
import bottomlayer from '../assets/images/PNG/bottomlayer.png'

function Tokenomics() {
    return (
        <>
            <div className=""> <img src={toplayer} alt="toplayer" className=' w-100' /></div>
            <div className="bg-black my-neg-3">
                <div className="container py-token">
                    <div className="row">
                        <div className="col-12 col-lg-5">
                            <div className=" d-md-flex flex-column align-items-center">
                                <CommonHeading color=" text-white" text="TOKENOMICS" />
                                <Commonpara text="Let's Hug GG ($LHGG) operates on a deflationary tokenomics model designed to incentivize selling Bitcoin.  With a fixed total supply and a burn mechanism in place, each transaction contributes to reducing the  circulating supply of $LHGG, thereby increasing its scarcity and value over time. Additionally, a portion of  transaction fees is allocated to liquidity pools, ensuring stability and liquidity for $LHGG holders." max_w_para=" max-w-453" color=" text-white" spacing=" mt-3" />
                                <div className="token-box w-100 mt-20">
                                    <p className=' ff-inter fw-normal text-20 lh-30 mb-0 text-white mt-12'>Token Name:<span className=' fw-bold'> &nbsp; &nbsp;  &nbsp;Let’s Hug GG</span></p>
                                    <p className=' ff-inter fw-normal text-20 lh-30 mb-0 text-white mt-12'>Token Symbol:<span className=' fw-bold'> &nbsp; &#36;LHGG</span></p>
                                    <p className=' ff-inter fw-normal text-20 lh-30 mb-0 text-white mt-12'>Total Supply:<span className=' fw-bold'> &nbsp; &nbsp;  &nbsp;1 Billion $LHGG</span></p>
                                    <p className=' ff-inter fw-normal text-20 lh-30 mb-0 text-white mt-12'>Total Type:<span className=' fw-bold'> &nbsp; &nbsp;  &nbsp;Solana SPL Token</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-7 mt-4 mt-lg-21">
                            <div className="max-w-616">
                                <div className="d-flex flex-wrap flex-lg-nowrap gap-3 justify-content-center justify-content-sm-start justify-content-md-center">
                                    <div className="ylw-box w-100 max-w-296">
                                        <p className=' ff-inter fw-semibold text-20 lh-30 mb-0 text-center'> Marketing & Partnerships</p>
                                        <p className=' ff-inter fw-semibold text-32 lh-30 mb-0 text-center mt-2 mb-0'>5%</p>
                                    </div>
                                    <div className="ylw-box w-100 max-w-131">
                                        <p className=' ff-inter fw-semibold text-20 lh-30 mb-0 text-center'> Reserve</p>
                                        <p className=' ff-inter fw-semibold text-32 lh-30 mb-0 text-center mt-2 mb-0'>5%</p>
                                    </div>
                                    <div className="ylw-box w-100 max-w-152">
                                        <p className=' ff-inter fw-semibold text-20 lh-30 mb-0 text-center'>Public Sale</p>
                                        <p className=' ff-inter fw-semibold text-32 lh-30 mb-0 text-center mt-2 mb-0'>45%</p>
                                    </div>
                                </div>
                                <div className=" d-flex flex-wrap flex-lg-nowrap gap-24 mt-3 justify-content-center justify-content-sm-start justify-content-md-center">
                                    <div className="ylw-box w-100 max-w-296">
                                        <p className=' ff-inter fw-semibold text-20 lh-30 mb-0 text-center'>Community Development</p>
                                        <p className=' ff-inter fw-semibold text-32 lh-30 mb-0 text-center mt-2 mb-0'>15%</p>
                                    </div>
                                    <div className="ylw-box w-100 max-w-296">
                                        <p className=' ff-inter fw-semibold text-20 lh-30 mb-0 text-center'>Ecosystem Fund</p>
                                        <p className=' ff-inter fw-semibold text-32 lh-30 mb-0 text-center mt-2 mb-0'>10%</p>
                                    </div>
                                </div>
                                <div className=" d-flex justify-content-center justify-content-sm-start justify-content-md-center">
                                    <div className="ylw-box w-100 max-w-296 mt-3">
                                        <p className=' ff-inter fw-semibold text-20 lh-30 mb-0 text-center'>Team & Adisors</p>
                                        <p className=' ff-inter fw-semibold text-32 lh-30 mb-0 text-center mt-2 mb-0'>20%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=""><img src={bottomlayer} alt="bottomlayer" className=' w-100' /></div>
        </>
    )
}

export default Tokenomics