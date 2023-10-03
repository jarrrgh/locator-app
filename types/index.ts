import { MouseEventHandler } from "react"

export interface CustomButtonProps {
    title: string
    containerStyles?: string
    handleClick?: MouseEventHandler<HTMLButtonElement>
    btnType?: "button" | "submit"
}

export interface CustomFilterProps {
    title: string
}

export interface SearchNameProps {
    name: string
    setName: (name: string) => void
}

export interface LocationData {
    id: number
    lat: number
    long: number
    distance?: number
}

export interface LocationDetails {
    id: number
    name: string,
    height?: number,
    mass?: number,
    gender?: string,
    homeworld?: string,
    wiki?: string,
    image: string,
    born?: number,
    died?: number,
    diedLocation?: string,
    species?: string,
    hairColor?: string,
    eyeColor?: string,
    skinColor?: string,
    cybernetics?: string,
    affiliations?: string | string[]
    masters?: string | string[]
    apprentices?: string | string[]
    formerAffiliations?: string | string[]
  }
