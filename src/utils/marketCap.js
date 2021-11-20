

export const marketCap = async (symbol) => {
    if (!symbol) return 'You need to set a symbol for this currency'
    const url = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=${symbol}`;
    const opts = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            'X-CMC_PRO_API_KEY': "b4dd5499-4837-4d1b-85c5-11d968b0af88",
            'Access-Control-Allow-Origin': '*'
        },
    };
    try {
      return fetch(url, opts)
            .then((response) => response.json())
            .then((data) => data.data[symbol].quote.USD)

    } catch (e) {
        console.warn(e)
    }

}