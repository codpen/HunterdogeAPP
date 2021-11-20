
const url = "https://graphql.bitquery.io/";
export const getHolders = async (address) => {
    let date = new Date();
    let a = new Date(	"2020-06-08");
    let b = new Date();

    const query = ` 
    query{
    ethereum(network: bsc) {
    transfers(
      currency: {is: "${address}"}
      amount: {gt: 0}
      date: {since: "${a.toISOString()}", till: "${b.toISOString()}"}
    ) {
      currency {
        symbol
      } 
      median: amount(calculate: median)
      average: amount(calculate: average)
      amount
      count
      days: count(uniq: dates)
      sender_count: count(uniq: senders)
      receiver_count: count(uniq: receivers)
      min_date: minimum(of: date)
      max_date: maximum(of: date)
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
    return await fetch(url, opts)
}