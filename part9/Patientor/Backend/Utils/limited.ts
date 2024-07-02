import { patients } from "../Services/patients"
import { limitedPatient } from "../Types/patient"

export const getLimitedPatients = () : limitedPatient[] => {
    return patients.map(({ ssn, ...rest }) => rest)
}