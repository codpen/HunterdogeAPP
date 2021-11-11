import { useState, useEffect } from 'react';
import {getVotesPerProject} from "../connection/functions";

export const useVotesPerProject = (address) => {
    const [state, setState] = useState({
        votes: 0,
        error: undefined,
        isLoading: true
    })

    useEffect(() => {
        const call = async () => {
            try {
                const votes = await getVotesPerProject(address)
                setState((state) => ({...state, votes, isLoading: true}))
            } catch (error) {
                setState((state) => ({...state, error: error, isLoading: true}))
            }
        }
        call()
    }, [])

    return state;
}