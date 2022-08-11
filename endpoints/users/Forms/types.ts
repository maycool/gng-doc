import { Integer } from "@airtasker/spot";
export interface GetUserVerificationFormSuccess {
    id: Integer,
    cardNumber: string,
    cardValidTo: string,
    agencyName?: string,
    officeNumber?: string,
    registeredLocation?: string,
    socialMedia?: string,
    website?: string,
    media: { id: Integer, url: string },
    countries?: {id: Integer, name: string}[],
    team?: { id: Integer, name: string }
}
export interface GetUserVerificationFormFail{
    message: string;
}