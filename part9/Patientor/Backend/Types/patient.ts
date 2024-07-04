// eslint-disable-next-line @typescript-eslint/no-empty-interface

export interface OccupationalHealthCareEntry {
    id: string,
    date: string,
    type: string,
    specialist: string,
    description: string,
    diagnoses: DiagnoseCode[],
    discharge: Discharge

}

export type id = string

export interface Discharge {
    date: string,
    criteria: string
}

export type Entry = OccupationalHealthCareEntry 

export interface Patient {
    id: string;
    name: string;
    occupation: string;
    gender: Gender;
    ssn?: string;
    dateOfBirth?: string;
    entries: OccupationalHealthCareEntry[];
}

export type limitedPatient = Omit<Patient, 'ssn'>

export enum Gender {
    Male = "male",
    Female = "female",
    Other = "other"
}

export interface Diagnose {
    code: string,
    name: string,
    latin?: string
}

export type DiagnoseCode = Omit<Diagnose, 'name' | 'latin' >