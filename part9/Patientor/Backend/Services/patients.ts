import { Gender, Patient } from '../Types/patient'

export const patients: Patient[] = [
    {
        id: "1",
        name: "John Doe",
        occupation: "Engineer",
        gender: Gender.Male,
        ssn: "123-45-6789",
        dateOfBirth: "1980-05-15"
    },
    {
        id: "2",
        name: "Jane Smith",
        occupation: "Doctor",
        gender: Gender.Female,
        ssn: "987-65-4321",
        dateOfBirth: "1992-09-22"
    },
    {
        id: "3",
        name: "Alex Johnson",
        occupation: "Student",
        gender: Gender.Other,
        ssn: "456-78-9123",
        dateOfBirth: "2000-11-30"
    },
    {
        id: "4",
        name: "Mary Williams",
        occupation: "Lawyer",
        gender: Gender.Female,
        ssn: "321-54-6789"
    },
    {
        id: "5",
        name: "Charles Brown",
        occupation: "Teacher",
        gender: Gender.Male,
        dateOfBirth: "1975-02-14",
        ssn: "12-34-56"
    }
]

export const getPatients = () => {
    const result = patients
    return result
}

export const newPatient = (body: any) => {
    const {name,occupation,gender,dateOfBirth, ssn} = body
    const parseName = () => {
        if(typeof name !== 'string'){
            throw new Error('Type of name is not string')
        }
    }
    const parseOcuppation = () => {
        if(typeof occupation !== 'string'){
            throw new Error('Occupation type is not string')
        }
    }
    const parseDateOfBirth = () => {
        if(typeof dateOfBirth !== 'string'){
            throw new Error('Date of birth type is not string')
        }
    }
    const parseGender = () => {
        if(gender !== 'male' && gender !== 'female' && gender !== 'other'){
            throw new Error('Type of name is not string')
        }
    }
    try{
        parseName()
        parseOcuppation()
        parseDateOfBirth()
        parseGender()
        const newPatient: Patient = {
            name,
            occupation,
            dateOfBirth,
            id: crypto.randomUUID(),
            gender,
            ssn
        }
        patients.push(newPatient)
        return newPatient
    }
    catch(error){
        console.log(error)
        return undefined
    }
}
