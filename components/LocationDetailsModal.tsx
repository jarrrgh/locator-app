import { LocationData, LocationDetails } from "@/types"
import Link from "next/link";

declare type EventType = React.KeyboardEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement | HTMLButtonElement>;

interface LocationDetailsProps {
    details: LocationDetails
    onClose?: (e: EventType) => void;
}

const LocationDetailsModal = ({ details, onClose }: LocationDetailsProps) => {

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

    const renderDetail = (label: string, value: string | string[] | undefined) => {
        if (value) {
            if (Array.isArray(value)) {
                return <p>{label}: {value.join(", ")}</p>
            }
            return <p>{label}: {value}</p>
        } else {
            null
        }
    }

    return (
        // <div className="absolute top-0 right-0 bottom-0 left-0 bg-black" >
            <div className="bg-white rounded-3xl">
                <h2>{details.name}</h2>
                {renderDetail("Species", `${details.species}`)}
                {renderDetail("Height", `${details.height}`)}
                {renderDetail("Mass", `${details.mass}`)}
                {renderDetail("Gender", `${details.gender}`)}
                {renderDetail("Homeworld", `${details.homeworld}`)}
                {renderDetail("Born", `${details.born}`)}
                {renderDetail("Died", `${details.died}`)}
                {renderDetail("Died Location", `${details.diedLocation}`)}
                {renderDetail("Hair Color", `${details.hairColor}`)}
                {renderDetail("Eye Color", `${details.eyeColor}`)}
                {renderDetail("Skin Color", `${details.skinColor}`)}
                {renderDetail("Cybernetics", `${details.cybernetics}`)}
                {renderDetail("Masters", details.masters)}
                {renderDetail("Apprentices", details.apprentices)}
                {renderDetail("Affiliations", details.affiliations)}
                {renderDetail("Former Affiliations", details.formerAffiliations)}
                {details.wiki ? <Link href={details.wiki}>More info</Link> : null}
            </div>
        // </div>
    )
}

export default LocationDetailsModal