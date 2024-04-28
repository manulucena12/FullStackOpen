import { useState } from "react";
const Ratio = ({good,rates}) =>{
    return(
        <>
            <h3>Positive ratio: {good/rates*100} %  </h3>
           
        </>
    )
}
const Average = ({good,bad,rates}) => {
    return(
        <>
             <h3>Average: {(good-bad)/rates} </h3>
        </>
    )
}
const Calculus = ({good,neutral,bad}) => {
    const rates = good + neutral + bad
    return(
        <>
            <h3>Total: {rates} </h3>
            <h3> {good === 0 ? 'Still not positive reviews' : <Ratio good={good} rates={rates}/>  }   </h3>
            <h3>{rates === 0 ? 'Still Not Reviews' : <Average good={good} bad={bad} rates={rates}/>}</h3>
        </>
    )
}
//Exercise 1.10: I think this component is what you are requesting from me, if something's wrong, let me know please, I did not understand it well in that case.
const StatisticsLine = ({text,value}) => {
    return(
        <>
            <button onClick={value}>
                {text}
            </button>
        </>
    )
}
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
            <StatisticsLine text='Good' value={increaseGood}/>
            <StatisticsLine text='Neutral' value={increaseNeutral}/>
            <StatisticsLine text='Bad' value={increaseBad}/>
            <h1>Statistics</h1>
            <ul>
                <li>Good: {goodValue} </li>
                <li>Neutral: {neutralValue} </li>
                <li>Bad: {badValue} </li>
            </ul>
            <h3> {goodValue + neutralValue + badValue === 0 ? 'Still not feedback given' : <Calculus good={goodValue} neutral={neutralValue} bad={badValue}/> } </h3>
            
        </>
    )
}

export default StateUnicafe