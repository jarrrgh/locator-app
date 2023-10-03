"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

import { LocationData, LocationDetails } from "@/types"
import LocationDetailsModal from "./LocationDetailsModal"

interface LocationCardProps {
    location: LocationData
    onClick: (locationWithDetails: LocationData) => void
}

const LocationCard = ({ location, onClick }: LocationCardProps) => {
    const { id, lat, long, distance } = location

    const [details, setDetails] = useState<LocationDetails | null>(null);
    const [isLoading, setLoading] = useState<boolean>(false);
    const [isOpen, setOpen] = useState<boolean>(false);

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

    const handleClick = () => {
        if (details) {
            setOpen(true)
            // onClick({...location, details})
        }
    }

    if (details) {
        return (
            <div onClick={handleClick} className="overflow-hidden hover:h-96 scale-75 hover:scale-100 snap-center flex-shrink-0 bg-slate-700 border-blue-300 hover:border-slate-200 shadow rounded-xl p-3">
                <Image className="object-cover brightness-50 transition-opacity ease-in" src={details.image} alt={details.name} fill />
                <div className="relative grid grid-cols-2 grid-rows-2 gap-4">
                    <div className="w-28 h-28 -ml-8 -mt-8">
                    </div>
                    <p className="text-right text-2xl font-bold">{distance ? distance : '--'} km</p>
                    <div className="grid grid-cols-2 col-span-2 pt-4">
                        <h3 className="w-full col-span-4 font-bold text-center uppercase">{details.name}</h3>
                        <p className="w-full col-span-2  text-center capitalize">({details.species})</p>
                    </div>
                    {/* {isOpen
                        ? <div className="collapse">
                            <LocationDetailsModal details={details} />
                        </div> : null} */}
                </div>
            </div>
        )
    } else {
        return (
            <div className="overflow-hidden scale-75 hover:scale-100 snap-center flex-shrink-0 border backdrop-blur-sm border-blue-300 hover:border-slate-200 shadow rounded-xl p-3">
                <div className="grid grid-cols-2 grid-rows-2 gap-4">
                    <div className="w-28 h-28 -ml-8 -mt-8 bg-slate-700 rounded-full"></div>
                    <div className="w-full h-5 bg-slate-700 rounded-full"></div>
                    <div className="grid grid-cols-2 col-span-2 pt-4">
                        <div className="w-full h-3 bg-slate-700 rounded-full col-span-4"></div>
                        <div className="w-full h-3 bg-slate-700 rounded-full col-span-2"></div>
                    </div>
                </div>
            </div>
        )
        // return (
        //     <div className="location-card group">
        //         <div className="location-card__image">
        //             <Image src="https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg" alt="vador" fill className="object-cover" />
        //         </div>
        //         <div className="location-card__content">
        //             <h2 className="location-card__content-title">Lollers</h2>
        //         </div>

        //     </div>
        // )
    }

}

export default LocationCard
