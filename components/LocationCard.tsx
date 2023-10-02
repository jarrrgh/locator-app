"use client"

import { useState } from "react"
import Image from "next/image"

import { Location, LocationDetails } from "@/types"

interface LocationCardProps {
    location: Location
}

const LocationCard = ({ location }: LocationCardProps) => {
    const { id, lat, long } = location

    const details = {
        "id": 22,
        "name": "Boba Fett",
        "height": 1.83,
        "mass": 78,
        "gender": "male",
        "homeworld": "kamino",
        "wiki": "http://starwars.wikia.com/wiki/Boba_Fett",
        "image": "https://vignette.wikia.nocookie.net/starwars/images/7/79/Boba_Fett_HS_Fathead.png",
        "born": "Shortly after the Battle of Naboo",
        "species": "human",
        "hairColor": "black",
        "eyeColor": "brown",
        "skinColor": "tan",
        "affiliations": [
            "Confederacy of Independent Systems",
            "Boba Fett's syndicate",
            "Jabba Desilijic Tiure's criminal empire",
            "Galactic Empire"
        ],
        "formerAffiliations": []
    }

    return (
        <div className="location-card group">
            <div className="location-card__image">
                <Image src="https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg" alt="vador" fill className="object-cover" />
            </div>
            <div className="location-card__content">
                <h2 className="location-card__content-title">Lollers</h2>
            </div>

        </div>
    )
}

export default LocationCard
