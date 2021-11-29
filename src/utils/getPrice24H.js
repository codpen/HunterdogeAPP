import { bscWBNBContact } from "../connection/contracts";

const url = "https://graphql.bitquery.io/";
export const getPrice24H = async (address) => {
    let current = new Date();
    let dayBefore = new Date(current.getTime() - 86400000);

    const query = ` 
    {
        ethereum(network: bsc) {
          dexTrades(
            options: {desc: ["block.height", "tradeIndex"], limit: 1}
            exchangeName: {in: ["Pancake", "Pancake v2"]}
            baseCurrency: {is: "${address}"}
            quoteCurrency: {is: "${bscWBNBContact}"}
            time: {before: "${dayBefore.toISOString()}"}
          ) {
                smartContract {
                    address {
                        address
                    }
                    contractType
                    currency {
                        name
                    }
                }
                tradeIndex
                block {
                    height
                }
                baseCurrency {
                    symbol
                    address
                }
                quoteCurrency {
                    symbol
                    address
                    }
                quotePrice
            }
        }
    }
      `;

    const opts = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-API-KEY": "BQYlaag0B0moE0ngSFGP03NLuffZ52sD"
        },
        body: JSON.stringify({
            query
        })
    };

    try {
        return await fetch(url, opts)
            .then(res => res.json())
            .then(res => res.data.ethereum.dexTrades[0].quotePrice)
    } catch (e) {
        console.warn(e)
    }

}