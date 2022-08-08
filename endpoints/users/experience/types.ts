import { Integer } from "@airtasker/spot";
interface ListedExperienceInProfile {
    id: Integer;
    isCurrentlyThere: boolean;
    startDate: string;
    endDate?: string;
    matches?: Integer;
    goals?: Integer;
    type?: string;
    position?: string;
    playingLevel?: string;
    playerScouted?: Integer
    team: {
        id: Integer;
        name: string;
        type: string;
        status: string;
        media: { id: Integer; url: string };
    }

}

export interface ExperienceResponseListClubAndNational {
    CLUB: ListedExperienceInProfile[];
    NATIONAL: ListedExperienceInProfile[];
}
export interface ListExperienceSuccess{
    data: ListedExperienceInProfile[]
    message: string;
}
export interface ListExperienceFail{
    message: string;
}