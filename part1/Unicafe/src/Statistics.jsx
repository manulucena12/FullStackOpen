import { useState } from "react";
const Ratio = ({good,rates}) =>{
    return(
        <>
            <td>Positive ratio: {good/rates*100} %  </td>
        </>
    )
}
const Average = ({good,bad,rates}) => {
    return(
        <>
             <td>Average: {(good-bad)/rates} </td>
        </>
    )
}
const Calculus = ({good,neutral,bad}) => {
    const rates = good + neutral + bad
    return(
        <>
            <td>Total: {rates} </td>
            <td> {good === 0 ? 'Still not positive reviews' : <Ratio good={good} rates={rates}/>  }   </td>
            <td>{rates === 0 ? 'Still Not Reviews' : <Average good={good} bad={bad} rates={rates}/>}</td>
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
            <table>
                <tr>
                    <th> Statistics </th>
                    
                </tr>
                <tr>
                    <td>Good: {goodValue} </td>
                </tr>
                <tr>
                    <td>Neutral: {neutralValue} </td>
                </tr>
                <tr>
                    <td>Bad: {badValue}</td>
                </tr>
                <tr>
                    <td>{goodValue + neutralValue + badValue === 0 ? 'Still not feedback given' : <Calculus good={goodValue} neutral={neutralValue} bad={badValue}/> }</td>
                </tr>
            </table>
            
        </>
    )
}

export default StateUnicafe