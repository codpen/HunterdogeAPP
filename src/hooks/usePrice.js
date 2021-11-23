import { useState, useEffect } from 'react';

export const usePrice = (address, time = 30000) => {
    const [state, setState] = useState({price: '0'})

    useEffect(() => {
        const fetchSheet = async () => {
            try {
                await fetch(`https://api.pancakeswap.info/api/v2/tokens/${address}`)
                    .then((response) => {
                        return response.json();
                    })
                    .then((data) => {
                        setState({price: data.data.price})
                    });
            } catch (e) {
                console.warn(e)
            }
        };
        let timer;
            fetchSheet()
            if (time) {
                timer = setInterval(() => {
                    fetchSheet()
                }, time)
            }
        return () => clearInterval(timer)
    },[])

    return state;
}