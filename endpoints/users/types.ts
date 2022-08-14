import {  Integer} from "@airtasker/spot";


    export interface Media {
        id: Integer;
        url: string;
    }

    export interface Team {
        id?: Integer;
        name?: string;
    }

    export interface Parent {
        id?: Integer;
        firstName?: string;
        lastName?: string;
        url?: string;
    }

    export interface AgentForUser {
        id: Integer;
        firstName: string;
        lastName: string;
        url: string;
    }

    export interface Country {
        id: Integer;
        url: string;
        name: string;
    }

    export interface Player {
        id: Integer;
        firstName: string;
        lastName: string;
        bio?: string;
        gender: string;
        city: string;
        role: string;
        verificationStatus?: string;
        nationality: string;
        height?: string;
        weight?: string;
        strongFoot?: string;
        otherPosition?: string;
        primaryPosition?: string;
        media: Media;
        team?: Team;
        parent?: Parent;
        agent?: AgentForUser;
        country: Country;
    }
    export interface Coach {
        id: Integer;
        firstName: string;
        lastName: string;
        bio?: string;
        gender: string;
        city: string;
        role: string;
        verificationStatus?: string;
        nationality: string;
        totalTeamsCoached: Integer;
        media: Media;
        team?: Team;
        agent?: AgentForUser;
        country: Country;
    }
    export interface Scout {
        id: Integer;
        firstName: string;
        lastName: string;
        bio?: string;
        gender: string;
        city: string;
        role: string;
        verificationStatus?: string;
        nationality: string;
        typeOfScouting: string;
        media: Media;
        representee?: Player[] | Coach[];
        country: Country;
    }
    export interface Agent {
        id: Integer;
        firstName: string;
        lastName: string;
        bio?: string;
        gender: string;
        city: string;
        role: string;
        verificationStatus?: string;
        nationality: string;
        totalCareerTransfers: Integer;
        media: Media;
        representee?: Player[] | Coach[];
        country: Country;
    }
    export interface Other {
        id: Integer;
        firstName: string;
        lastName: string;
        bio?: string;
        gender: string;
        city: string;
        role: string;
        verificationStatus?: string;
        nationality: string;
        media: Media;
        team?: Team;
        country: Country;
    }

export interface ProfileResponseSuccess{
    data: Player | Coach | Agent | Scout | Other;
    message: string;
}
export interface ListUsersResponseSuccess{
    data: Player[] | Coach[] | Agent[] | Scout[] | Other[];
    message: string;
}
export interface ListUsersResponseFail{
    message: string;
}