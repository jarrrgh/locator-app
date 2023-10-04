"use client"

import { Backdrop, Map } from '@/components'
import LocationCard from '@/components/LocationCard'
import { ActionTypes, useDispatchLocations, useLocations } from '@/context/LocationContext';
import { sortByDistance } from '@/utils'
import { useEffect, useRef } from 'react';

export default function Home() {
    const containerRef = useRef<HTMLInputElement>(null);
    const { myLocation, locations, selectedLocation } = useLocations()
    const dispatch = useDispatchLocations()
    sortByDistance(locations);

    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            setTimeout(() => {
                container.scrollTo({
                    left: 0,
                    behavior: 'smooth'
                });
            }, 240);
        }
    }, [myLocation, containerRef])

    const onClick = () => {
        if (selectedLocation) {
            dispatch({
                type: ActionTypes.SELECT_LOCATION,
                payload: null
            })
        }
    }

    return (
        <main className="overflow-hidden">
            <Backdrop />
            <div className="bg-radial-gradient -mt-4">
                <Map />
            </div>

            {myLocation
                ? <div
                    ref={containerRef}
                    onClick={onClick}
                    className={`absolute bottom-0 left-0 right-0 ${selectedLocation ? "top-0" : ""} overflow-x-auto flex items-end snap-x p-4`}
                >
                    {locations.map((location) =>
                        <LocationCard
                            key={`location-${location.id}`}
                            location={location} /
                        >)}
                </div>
                : null}
        </main >
    )
}
