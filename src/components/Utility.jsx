import React from 'react'
import CommonHeading from '../common/Commonheading'
import ComnPara from '../common/Commonpara'
import man from '../assets/images/PNG/utility-man.png'
import notes from '../assets/images/PNG/notes.png'

function Utility() {
    return (
        <>
            <div className="bg-utility position-relative overflow-hidden">
                <div className="container py-utility">
                    <div className="row">
                        <div className="col-6 d-flex align-items-center">
                            <div className="">
                                <CommonHeading text="UTILITY" color=" text-black" />
                                <ComnPara text="The utility of $LHGG extends beyond its humorous appeal.  Holders of $LHGG gain access to exclusive merchandise,  events, and community perks. Furthermore, $LHGG serves  as a medium of exchange within our ecosystem, facilitating  transactions and interactions among community members.  Through strategic partnerships and integrations, we aim to  expand the utility of $LHGG, creating additional avenues for  adoption and growth." max_w_para="max-w-550" spacing=" mt-20" />
                                <button className=' ff-inter fw-semibold text-16 lh-1936 ylw-btn mt-4'>Buy $GrayGensler</button>
                            </div>
                        </div>
                        <div className="col-6 d-flex justify-content-center">
                            <img src={man} alt="man" />
                        </div>
                    </div>
                </div>
                <p className=' ff-grands fw-900 text-322 lh-32 color-grey mb-0 text-pos1 position-absolute'>I love FUDing</p>
                <p className=' ff-grands fw-900 text-322 lh-32 color-grey mb-0 text-pos2 position-absolute'>I love FUDing</p>
                <p className=' ff-grands fw-900 text-322 lh-32 color-grey mb-0 text-pos3 position-absolute'>I love FUDing</p>
                <div className="position-absolute notes-pos">
                    <img src={notes} alt="notes" />
                </div>
                <div className="tilted-yellow-layer mb-4 w-100 d-flex align-items-center justify-content-center">
                    <p className=' ff-inter fw-900 text-36 lh-43 text-black mb-0'>PLACE YOURSELF ON THE RIGHT SIDE OF HISTORY</p>
                </div>
            </div>
        </>
    )
}

export default Utility