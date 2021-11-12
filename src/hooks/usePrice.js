import { useState, useEffect } from 'react';

export const usePrice = (time = 30000) => {
    const [state, setState] = useState({price: '0'})

    useEffect(() => {
        const fetchSheet = async () => {
            try {
                await fetch('https://api.pancakeswap.info/api/v2/tokens/0xa27895467940fE37E461046870Db5235B5977103')
                    .then((response) => {
                        return response.json();
                    })
                    .then((data) => {
                        console.log(data)
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