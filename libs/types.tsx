export type ErrorsType = Record<string,string[]>

export type LoadingType = Record<string,boolean>


export type UserLogin  = {
    email: string,
    password: string
}

export const userLoginDefault = {
    email :"",
    password: ""
}

export type AdminType = {
    username: string,
    password: string
}

export const adminDefault = {
    username :"string",
    password: "string"
}


export type UserType = {
    id?: number,
    noms: string,
    prenoms: string,
    email: string,
    poste:string,
    anciennete: string,
    superieur: string,
    agence: string,
    classification:string,
    direction: string,
    departement: string,
    password_confirmation?:string,
    email_verified_at?: any,
    created_at?: any,
    updated_at?: any
}

export const userDefault = {
    noms: "",
    prenoms: "",
    email: "",
    poste:"",
    anciennete: "",
    superieur: "",
    agence: "Douala",
    classification:"",
    direction: "Douala ( Direction Générale )",
    departement: "",
}

export type ObjectifType = {
    id: number, 
    intitule_obj: string,
    intitule_eval: string,
    created_at?: any,
    updated_at?: any
}

export const objectifDefault = {
    id: 0,
    intitule_obj: "",
    intitule_eval: "",
}

export type AssignationType = {
    id?: number, 
    date_deb : string,
    date_fin : string,
    valeur_eval: number,
    objectif_id : number,
    intitule_obj?: string,
    intitule_eval?: string,
    objectif?:any,
    filled?: boolean,
    score_id?:number,
    scores: any,
    pending: any,
}

export const assignationDefault = {
    date_deb: "",
    date_fin: "",
    valeur_eval: 0,
    objectif_id: 0,
    intitule_obj: "",
    intitule_eval:"",
    objectif:{},
    scores:[],
    pending: []
}

export type ScoreType = {
    id?: number,
    assignation_id?: number,
    user_id?: number,
    user?: any,
    valeur_score?: number,
    moyens: string[],
    assignation? : any
}

export const scoreDefault = {
    moyens : []
}