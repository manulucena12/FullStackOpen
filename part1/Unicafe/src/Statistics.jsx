import { useState } from "react";
const StateUnicafe = () =>{

    const [goodValue, updateGood] = useState(0)
    const [neutralValue, updateNeutral] = useState(0)
    const [badValue, updateBad] = useState(0)
    const increaseGood = () => {
        updateGood(goodValue+1)
    }
    const increaseNeutral = () => {
        updateNeutral(neutralValue+1)
    }
    const increaseBad = () => {
        updateBad(badValue+1)
    }



    return(
        <>
            <h1>Unicafe Exercise by @manulucena12</h1>
            <h2>Please, rate your experience using this app</h2>
            <button onClick={increaseGood}>
                Good 
            </button>
            <button onClick={increaseNeutral}>
                Neutral
            </button>
            <button onClick={increaseBad}>
                Bad
            </button>
            <h1>Statistics</h1>
            <ul>
                <li>Good: {goodValue} </li>
                <li>Neutral: {neutralValue} </li>
                <li>Bad: {badValue} </li>
            </ul>
        </>
    )
}

export default StateUnicafe