import React from 'react'

const bd = () => {
    return (
        <div className="bd-bg">
            <div className="bd-z-3">
                <div className="bd-tile bd-top-left bd-animate-opacity bd-freq-5"></div>
                <div className="bd-tile bd-top-right bd-animate-opacity bd-freq-9"></div>
                <div className="bd-tile bd-bottom-left bd-animate-opacity bd-freq-7"></div>
                <div className="bd-tile bd-bottom-right bd-animate-opacity bd-freq-10"></div>
            </div>
            <div className="bd-z-2">
                <div className="bd-tile bd-top-left bd-animate-opacity bd-freq-9 bd-delay-2"></div>
                <div className="bd-tile bd-top-right bd-animate-opacity bd-freq-5 bd-delay-2"></div>
                <div className="bd-tile bd-bottom-left bd-animate-opacity bd-freq-6 bd-delay-4"></div>
                <div className="bd-tile bd-bottom-right bd-animate-opacity bd-freq-10 bd-delay-4"></div>
            </div>
            <div className="bd-z-1">
                <div className="bd-tile bd-top-left bd-animate-opacity bd-freq-7 bd-delay-2"></div>
                <div className="bd-tile bd-top-right bd-animate-opacity bd-freq-5 bd-delay-4"></div>
                <div className="bd-tile bd-bottom-left bd-animate-opacity bd-freq-9 bd-delay-2"></div>
                <div className="bd-tile bd-bottom-right bd-animate-opacity bd-freq-5 bd-delay"></div>
            </div>
        </div>
    )
}

export default bd