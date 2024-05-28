import React from 'react'
import newsman from '../assets/images/PNG/ecoman.png'
import Headicon from './Headicon'
function Ecosystem() {
    return (
        <>
            <div className="bg-ecosystem">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <img src={newsman} alt="newsman" />
                        </div>
                        <div className="col-6">
                            <Headicon/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Ecosystem