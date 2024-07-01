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

const args = process.argv.slice(2)
if (args.length < 2) {
    console.log("Please provide height (cm) and weight (kg)")
    process.exit(1)
}

const height = Number(args[0])
const weight = Number(args[1])

if (isNaN(height) || isNaN(weight)) {
    console.log("Both height and weight need to be valid numbers.")
    process.exit(1)
}

const result = bmiCalculator(height, weight)
console.log(result)