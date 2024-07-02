import { Gender, Patient } from '../Types/patient'

const patients: Patient[] = [
    {
        "id": "1",
        "name": "John Doe",
        "occupation": "Engineer",
        "gender": Gender.Male,
        "ssn": "123-45-6789",
        "dateOfBirth": "1980-05-15"
    },
    {
        "id": "2",
        "name": "Jane Smith",
        "occupation": "Doctor",
        "gender": Gender.Female,
        "ssn": "987-65-4321",
        "dateOfBirth": "1992-09-22"
    },
    {
        "id": "3",
        "name": "Alex Johnson",
        "occupation": "Student",
        "gender": Gender.Other,
        "ssn": "456-78-9123",
        "dateOfBirth": "2000-11-30"
    },
    {
        "id": "4",
        "name": "Mary Williams",
        "occupation": "Lawyer",
        "gender": Gender.Female,
        "ssn": "321-54-6789"
    },
    {
        "id": "5",
        "name": "Charles Brown",
        "occupation": "Teacher",
        "gender": Gender.Male,
        "dateOfBirth": "1975-02-14"
    }
]


export const getPatients = () => {
    const result = patients
    return result
}