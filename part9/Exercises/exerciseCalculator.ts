import { Result } from "../Types/exercises"

export const exerciseCalculator = (hours: Array<number>, goal: number) : Result => {
    let trainingDays= 0
    let success = true
    let rating = 1
    let ratingDescription = ''
    const target = goal
    let total = 0
    for(let i = 0; i < hours.length ; i++){
        if(hours[i] > 0 ) {
            trainingDays += 1
            rating += .285
        }
        if(hours[i] >= goal){
            success = false
        }
        total += hours[i]
    }
    if(rating < 2) {
        ratingDescription = 'You have to do more exercise!'
    }else if(rating > 2 && rating < 2.6){
        ratingDescription = 'Keep going!'
    }else{
        ratingDescription = 'Well done!'
    }
    const periodLength = hours.length
    const average = total/hours.length
    const result: Result = {
        trainingDays,
        success,
        rating,
        ratingDescription,
        periodLength,
        average,
        target
    }
    return result
}
