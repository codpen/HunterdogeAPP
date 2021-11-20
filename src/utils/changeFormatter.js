export const changeFormatter = (change) => {
    if (change > 0) {
        return {text: `24H = +${change.toFixed(2)}%`, up: true}
    } else {
        return {text: `24H = ${change.toFixed(2)}%`, up: false}
    }
}