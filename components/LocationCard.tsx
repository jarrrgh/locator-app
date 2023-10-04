"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { LocationData, LocationDetails } from "@/types"
import LocationDetailsBox from "./LocationDetailsBox"
import { FiExternalLink } from 'react-icons/fi'
import { formatDistance } from "@/utils"
import { ActionTypes, useDispatchLocations, useLocations } from "@/context/LocationContext"

interface LocationCardProps {
    location: LocationData
}

const LocationCard = ({ location }: LocationCardProps) => {
    const { id, distance } = location

    const [details, setDetails] = useState<LocationDetails | null>(null);
    const [isLoading, setLoading] = useState<boolean>(false);

    const { selectedLocation } = useLocations()
    const dispatch = useDispatchLocations()

    useEffect(() => {
        if (!details && !isLoading) {
            setLoading(true)
            fetch(`https://akabab.github.io/starwars-api/api/id/${id}.json`)
                .then((res) => res.json())
                .then((data) => {
                    setDetails(data)
                    setLoading(false)
                })
        }
    }, [id, details, isLoading])

    const isOpen = selectedLocation && location.id == selectedLocation.id

    const onClick = () => {
        if (!selectedLocation) {
            dispatch({
                type: ActionTypes.SELECT_LOCATION,
                payload: location
            })
        }
    }

    if (details) {
        return (
            <div
                className={`relative group overflow-hidden w-64 ${isOpen ? "h-96" : "h-52"} transition ease-in-out ${isOpen ? "scale-100" : "scale-75"} snap-center flex-shrink-0 bg-slate-700 border-blue-300 hover:border-slate-200 shadow rounded-xl p-3 -mr-6 last:mr-0`}
                onClick={onClick}
            >
                <Image className="object-cover brightness-50 transition-opacity ease-in rounded-xl" src={details.image} alt={details.name} priority={false} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                <div className={`absolute h-52 mask-fade left-0 bottom-0 right-0`}>
                    <div className="absolute left-4 bottom-4 right-4 align-text-bottom text-xs capitalize">
                        {isOpen ? <LocationDetailsBox details={details} /> : null}
                    </div>
                </div>
                <div className="relative">
                    {details.wiki && isOpen ? <div className="absolute left-2 top-1"><Link href={details.wiki} target="_blank"><FiExternalLink /></Link></div> : null}
                    <p className="text-right text-2xl font-bold">{formatDistance(distance)}</p>
                    <p className={`text-right text-xs ${isOpen ? "mb-6" : "mb-20"}`}>Distance</p>
                    <h3 className="w-full font-bold text-center uppercase">{details.name}</h3>
                    <p className="w-full text-center capitalize">({details.species})</p>
                </div>
            </div>
        )
    } else {
        return (
            <div className="relative group animate-pulse overflow-hidden w-64 h-52 transition ease-in-out scale-75 snap-center flex-shrink-0 backdrop-blur-sm shadow border border-gray-700 hover:border-gray-300 rounded-xl p-3">
                <div className="relative">
                    <p className="text-right text-2xl font-bold mb-20"></p>
                    <h3 className="w-full font-bold text-center uppercase"></h3>
                    <p className="w-full text-center capitalize"></p>
                </div>
            </div>
        )
    }
}

export default LocationCard
