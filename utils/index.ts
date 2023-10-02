import { LocationDetails, Location } from "@/types";

export const fetchLocations = async (): Promise<Location[] | null> => {
    try {
        const response = await fetch("https://aseevia.github.io/star-wars-frontend/data/secret.json")
        if (response.ok) {
            // TODO: validate against JSON schema
            let secret = await response.json()
            const decodedMessage = atob(secret.message);
            return JSON.parse(decodedMessage)
        } else {
            throw new Error()
        }
    } catch (error) {
        return null
    }
}

export const fetchLocationDetails = async (id: number): Promise<LocationDetails | null> => {
    try {
        const response = await fetch(`https://akabab.github.io/starwars-api/api/id/${id}.json`)
        if (response.ok) {
            // TODO: validate against JSON schema
            const details = await response.json()
            return details
        } else {
            throw new Error()
        }
    } catch (error) {
        return null
    }
}

export const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
    // TODO: find an actual formula
    return Math.abs(lat1 - lat2) * 100
}
