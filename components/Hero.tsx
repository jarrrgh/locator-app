"use client"

import Image from 'next/image'
import CustomButton from './CustomButton'

const Hero = () => {
    const handleScroll = () => { }

    return (
        <div className="hero">
            <div className="flex-1 pt-20 padding-x">
                <h1 className="hero__title">
                    Hero title
                </h1>
                <p className="hero__subtitle">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit ratione odit magnam eligendi doloribus numquam ad!
                </p>
                {/* <CustomButton
                    title="Explore"
                    containerStyles="bg-primary-blue text-white rounded-full mt-10"
                    handleClick={handleScroll}
                /> */}
            </div>
            <div className="hero__map-container">
                <div className="hero__map">
                    <Image src="/banana.png" alt="banana" fill className="object-contain" />
                </div>
            </div>
            {/* <div className="hero__image-container">
                <div className="hero__image">
                    <Image src="/banana.png" alt="banana" fill className="object-contain" />
                </div>
            </div> */}
        </div>
    )
}

export default Hero