const bmiCalculator = (cm: number, weight: number) : string => {
    const m = 0.01 * cm
    const imc = weight/ (m * m)
    let status: string = ''
    if(imc < 18.5 ){
        status = 'Low weight'
        return status
    }else if(imc > 18.5 && imc < 25){
        status = 'Normal weight'
    }else if(imc > 25 && imc < 30){
        status = 'Overweighted'
        return status
    }else{
        status = 'Obesity'
        return status
    }
    return status
}

console.log(bmiCalculator(175, 76))