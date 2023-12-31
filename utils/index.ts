import { LocationData } from "@/types";

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

    return Math.round(distance * 10) / 10; // km
}

export const formatDistance = (distance: number | undefined): string => {
    let distanceStr = "--"
    if (typeof distance === 'number') {
        if (distance > 1000) {
            distanceStr = `${Math.round(distance / 1000 * 100) / 100} tkm`
        } else if (distance > 1) {
            distanceStr = `${Math.round(distance * 10) / 10} km`
        } else {
            distanceStr = `${Math.round(distance * 100)} m`
        }
    }
    return distanceStr
}

export const sortByDistance = (locations: LocationData[]) => {
    if (Array.isArray(locations)) {
        // Sort by distance in ascending order
        locations.sort((a, b) => {
            if (!b.distance) {
                return 1
            } else if (!a.distance) {
                return -1
            } else {
                return a.distance - b.distance
            }
        })
    }
}
