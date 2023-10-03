import { LocationDetails } from "@/types"
import Typewriter from 'typewriter-effect';

interface LocationDetailsProps {
    details: LocationDetails
}

const LocationDetailsBox = ({ details }: LocationDetailsProps) => {

    const parseStr = (label: string, value: number | number[] | string | string[] | undefined) => {
        console.log(label, value)
        if (value) {
            if (Array.isArray(value)) {
                if (value.length > 0) {
                    return `${label}: ${value.join(", ")}`
                } else {
                    return null
                }
            }
            return `${label}: ${value}`
        } else {
            return null
        }
    }

    const strings = [
        parseStr("Height", details.height),
        parseStr("Mass", details.mass),
        parseStr("Gender", details.gender),
        parseStr("Homeworld", details.homeworld),
        parseStr("Born", details.born),
        parseStr("Died", details.died),
        parseStr("Death Location", details.diedLocation),
        parseStr("Hair Color", details.hairColor),
        parseStr("Eye Color", details.eyeColor),
        parseStr("Skin Color", details.skinColor),
        parseStr("Cybernetics", details.cybernetics),
        parseStr("Masters", details.masters),
        parseStr("Apprentices", details.apprentices),
        parseStr("Affiliations", details.affiliations),
        parseStr("Former Affiliations", details.formerAffiliations),
    ].filter((str) => str)

    return (<Typewriter
        options={{
            delay: 20
        }}
        onInit={(typewriter) => {
            typewriter
                .typeString(strings.join(", "))
                .start();
        }}
    />)
}

export default LocationDetailsBox