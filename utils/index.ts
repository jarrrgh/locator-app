import { LocationData, LocationDetails } from "@/types";

export const fetchLocations = async (): Promise<LocationData[] | null> => {
    const response = await fetch("https://aseevia.github.io/star-wars-frontend/data/secret.json")
    if (response.ok) {
        // TODO: validate against JSON schema
        let secret = await response.json()
        const decodedMessage = atob(secret.message);
        return JSON.parse(decodedMessage)
    } else {
        throw new Error()
    }
}

export const fetchLocationDetails = async (id: number): Promise<LocationDetails | null> => {
    const response = await fetch(`https://akabab.github.io/starwars-api/api/id/${id}.json`)
    if (response.ok) {
        // TODO: validate against JSON schema
        const details = await response.json()
        return details
    } else {
        throw new Error()
    }
}

export const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);

    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;

    return Math.round(distance * 10) / 10;
}

export const sortByDistance = (locations: LocationData[]): LocationData[] => {
    console.log(locations)
    if (Array.isArray(locations)) {
        // Sort by distance in ascending order
        return locations.sort((a, b) => {
            if (!b.distance) {
                return 1
            } else if (!a.distance) {
                return -1
            } else {
                return a.distance - b.distance
            }
        })
    }
    console.log("NOT AN ARRAY!?", typeof locations)
    return locations
}