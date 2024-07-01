import {BMI} from '../Types/bmi'

export const bmiCalculator = (cm: number, weight: number) : BMI => {
    const m = 0.01 * cm
    const imc = weight/ (m * m)
    let status: string = ''
    if(imc < 18.5 ){
        status = 'Low weight'
    }else if(imc > 18.5 && imc < 25){
        status = 'Normal weight'
    }else if(imc > 25 && imc < 30){
        status = 'Overweighted'
    }else{
        status = 'Obesity'
    }
    const bmi: BMI = {
        weight,
        height: cm,
        status
    }
    return bmi
}

