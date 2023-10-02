"use client"

import { useState } from "react"
import Image from "next/image"

import { Location, LocationDetails } from "@/types"

interface LocationCardProps {
    location: Location
}

interface LocationCardDetailsProps {
    details?: LocationDetails
}

const LocationCardDetails = ({ details }: LocationCardDetailsProps) => {

    if (details) {
        const { name, gender, homeworld, image } = details

        return (
            <div>
                Details here
            </div>
        )
    } else {
        return (
            <div>
                Loading...
            </div>
        )
    }
}

const LocationCard = ({ location }: LocationCardProps) => {
    const { id, lat, long } = location

    const details = undefined

    return (
        <div className="location-card group">
            <div className="location-card__content">
                <h2 className="location-card__content-title"></h2>
            </div>
            <LocationCardDetails details={details} />
        </div>
    )
}



export default LocationCard
