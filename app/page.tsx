"use client"

import { Backdrop, Map } from '@/components'
import LocationCard from '@/components/LocationCard'
import { useLocations } from '@/context/LocationContext';
import { sortByDistance } from '@/utils'

export default function Home() {

    const { locations } = useLocations()
    sortByDistance(locations);

    return (
        <main className="overflow-hidden">
            <Backdrop />
            <div className="bg-radial-gradient -mt-4">
                <Map />
            </div>
            <div className="absolute bottom-0 left-0 right-0 z-10 overflow-x-auto flex items-end snap-x p-4">
                {locations.map((location) => <LocationCard key={`location-${location.id}`} location={location} />)}
            </div>
        </main >
    )
}
