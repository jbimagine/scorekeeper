
    // adds a zero to the front of any player's number less than 10
    // eg Player 1 will be Player 01
    export const padNumber = (number) => {
        return (number < 10 ? '0' : '') + number
    }
