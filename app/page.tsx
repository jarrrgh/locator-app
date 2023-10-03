"use client"

import { Backdrop, CustomFilter, Hero, LocationDetailsModal, Map, SearchBar } from '@/components'
import LocationCard from '@/components/LocationCard'
import { ActionTypes, LocationProvider, useDispatchLocations, useLocations } from '@/context/LocationContext';
import { calculateDistance, fetchLocations, sortByDistance } from '@/utils'
import Image from 'next/image'
import { createContext, useContext, useEffect, useState } from 'react';
import { LocationData, LocationDetails } from "@/types"

export default function Home() {

    const { myLocation, locations } = useLocations()
    const dispatch = useDispatchLocations()

    const [selectedLocationDetails, setSelectedLocationDetails] = useState<LocationDetails | null>(null);

    const sortedLocations = sortByDistance(locations);

    // const details = {
    //     "id": 22,
    //     "name": "Boba Fett",
    //     "height": 1.83,
    //     "mass": 78,
    //     "gender": "male",
    //     "homeworld": "kamino",
    //     "wiki": "http://starwars.wikia.com/wiki/Boba_Fett",
    //     "image": "https://vignette.wikia.nocookie.net/starwars/images/7/79/Boba_Fett_HS_Fathead.png",
    //     "born": "Shortly after the Battle of Naboo",
    //     "species": "human",
    //     "hairColor": "black",
    //     "eyeColor": "brown",
    //     "skinColor": "tan",
    //     "affiliations": [
    //         "Confederacy of Independent Systems",
    //         "Boba Fett's syndicate",
    //         "Jabba Desilijic Tiure's criminal empire",
    //         "Galactic Empire"
    //     ],
    //     "formerAffiliations": []
    // }
    
    return (
        // <main className="flex min-h-screen flex-col items-center justify-between p-2">
        <main className="overflow-hidden">
            <Backdrop />
            <div className="bg-radial-gradient -mt-4">
                <Map />
            </div>
            <div className="absolute bottom-0 left-0 right-0 z-10 overflow-x-auto flex items-end snap-x p-4">
                {
                    locations.map((location) => <LocationCard key={`location-${location.id}`} location={location} onClick={() => set} />)
                }
            </div>
            {/* {selectedLocationDetails
                ? <LocationDetailsModal details={selectedLocationDetails} onClose={() => console.log("onClose")}/>
                : null } */}
        </main >
    )
}
