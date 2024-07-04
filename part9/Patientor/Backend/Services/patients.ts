import { Gender, Patient } from '../Types/patient'

export const patients: Patient[] = [
    {
        id: "1",
        name: "John Doe",
        occupation: "Engineer",
        gender: Gender.Male,
        ssn: "123-45-6789",
        dateOfBirth: "1980-05-15",
        entries: [
            {
                id: crypto.randomUUID(),
                date: "2023-01-10",
                type: "OccupationalHealthCare",
                specialist: "Dr. Smith",
                description: "Routine check-up after back pain.",
                diagnoses: [{ code: "M54.5" }],
                discharge: {
                    date: "2023-01-15",
                    criteria: "Patient can return to work with light duties."
                }
            }
        ]
    },
    {
        id: "2",
        name: "Jane Smith",
        occupation: "Doctor",
        gender: Gender.Female,
        ssn: "987-65-4321",
        dateOfBirth: "1992-09-22",
        entries: [
            {
                id: crypto.randomUUID(),
                date: "2023-03-20",
                type: "OccupationalHealthCare",
                specialist: "Dr. Brown",
                description: "Annual health check-up.",
                diagnoses: [{ code: "Z00.0" }],
                discharge: {
                    date: "2023-03-22",
                    criteria: "No issues, patient is in good health."
                }
            }
        ]
    },
    {
        id: "3",
        name: "Alex Johnson",
        occupation: "Student",
        gender: Gender.Other,
        ssn: "456-78-9123",
        dateOfBirth: "2000-11-30",
        entries: [
            {
                id: crypto.randomUUID(),
                date: "2023-06-12",
                type: "OccupationalHealthCare",
                specialist: "Dr. Adams",
                description: "Consultation for anxiety issues.",
                diagnoses: [{ code: "F41.9" }],
                discharge: {
                    date: "2023-06-20",
                    criteria: "Patient should follow up with a mental health specialist."
                }
            }
        ]
    },
    {
        id: "4",
        name: "Mary Williams",
        occupation: "Lawyer",
        gender: Gender.Female,
        ssn: "321-54-6789",
        entries: [
            {
                id: crypto.randomUUID(),
                date: "2023-02-18",
                type: "OccupationalHealthCare",
                specialist: "Dr. White",
                description: "Check-up after minor surgery.",
                diagnoses: [{ code: "S52.5" }],
                discharge: {
                    date: "2023-02-25",
                    criteria: "Patient has recovered well."
                }
            }
        ]
    },
    {
        id: "5",
        name: "Charles Brown",
        occupation: "Teacher",
        gender: Gender.Male,
        dateOfBirth: "1975-02-14",
        ssn: "12-34-56",
        entries: [
            {
                id: crypto.randomUUID(),
                date: "2023-04-05",
                type: "OccupationalHealthCare",
                specialist: "Dr. Green",
                description: "Consultation for persistent cough.",
                diagnoses: [{ code: "J20.9" }],
                discharge: {
                    date: "2023-04-12",
                    criteria: "Patient advised to rest and take prescribed medication."
                }
            }
        ]
    }
]

export const getPatients = () => {
    const result = patients
    return result
}

export const getPatientById = (id: any) => {
    const patient: Patient | undefined = patients.find(p => p.id === id)
    if(patient){
        return patient
    }
    return undefined
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
            ssn,
            entries: []
        }
        patients.push(newPatient)
        return newPatient
    }
    catch(error){
        console.log(error)
        return undefined
    }
}
