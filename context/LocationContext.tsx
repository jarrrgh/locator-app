'use client'

import { LocationData } from '@/types';
import { calculateDistance } from '@/utils';
import React, { createContext, useReducer, Dispatch, useContext } from 'react';

export enum ActionTypes {
    REFRESH_DISTANCES = 'REFRESH_DISTANCES',
    SELECT_LOCATION = 'SELECT_LOCATION',
    SET_MY_LOCATION = 'SET_MY_LOCATION',
    SET_LOCATIONS = 'SET_LOCATIONS',
}

type ContainerProps = {
    children: React.ReactNode
};

interface Action {
    type: ActionTypes
    payload: any
}

interface State {
    myLocation: LocationData | null
    selectedLocation: LocationData | null
    locations: LocationData[]
}

const initialState: State = {
    myLocation: null,
    selectedLocation: null,
    locations: [],
};

const LocationStateContext = createContext<State>(initialState);
const LocationDispatchContext = createContext<Dispatch<Action>>(() => null)

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case ActionTypes.SET_MY_LOCATION:
            return { ...state, myLocation: action.payload }
        case ActionTypes.SET_LOCATIONS:
            return { ...state, locations: action.payload }
        case ActionTypes.SELECT_LOCATION:
            return { ...state, selectedLocation: action.payload }
        case ActionTypes.REFRESH_DISTANCES:
            const myLocation = state.myLocation
            if (myLocation) {
                const locations = state.locations.map((location) => {
                    const distance = calculateDistance(
                        myLocation.lat,
                        myLocation.long,
                        location.lat,
                        location.long)
                    return { ...location, distance }
                })
                return { ...state, locations };
            }
            return state;
        default:
            console.warn("Unknown action type.")
            return state;
    }
}

export const LocationProvider = ({ children }: ContainerProps) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <LocationDispatchContext.Provider value={dispatch}>
            <LocationStateContext.Provider value={state}>
                {children}
            </LocationStateContext.Provider>
        </LocationDispatchContext.Provider>
    )
}

export const useLocations = () => useContext(LocationStateContext)
export const useDispatchLocations = () => useContext(LocationDispatchContext)
