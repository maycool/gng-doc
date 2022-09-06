import {  Integer} from "@airtasker/spot";


    export interface Media {
        id: Integer;
        url: string;
    }

    export interface Team {
        id?: Integer;
        name?: string;
    }

    export interface Country {
        id: Integer;
        url: string;
        name: string;
    }
    export interface CountriesWorkedIn {
        id: Integer;
        name: string;
        latitude: number;
        longitude: number;
    }


    export interface Coach {
        id: Integer;
        firstName: string;
        lastName: string;
        birthdate: string;
        bio?: string;
        gender: string;
        city: string;
        role: string;
        verificationStatus: string;
        nationality: string;
        preferredFormation?: string[];
        totalTeamsCoached?: Integer;
        media?: Media;
        team?: Team;
        relationshipStatus: 'FRIEND' | 'REQUESTED' | 'PENDING' | null;
        countriesWorkedIn?: CountriesWorkedIn[];
        country: Country;
    }
    export interface Scout {
        id: Integer;
        firstName: string;
        lastName: string;
        birthdate: string;
        bio?: string;
        gender: string;
        city: string;
        role: string;
        verificationStatus: string;
        nationality: string;
        typeOfScouting?: string;
        team?: Team;
        media?: Media;
        relationshipStatus: 'FRIEND' | 'REQUESTED' | 'PENDING' | null;
        countriesWorkedIn?: CountriesWorkedIn[];
        country: Country;
    }
    export interface Agent {
        id: Integer;
        firstName: string;
        lastName: string;
        birthdate: string;
        bio?: string;
        gender: string;
        city: string;
        role: string;
        verificationStatus: string;
        nationality: string;
        totalCareerTransfers?: Integer;
        media?: Media;
        relationshipStatus: 'FRIEND' | 'REQUESTED' | 'PENDING' | null;
        countriesWorkedIn?: CountriesWorkedIn[];
        country: Country;
    }
    export interface Other {
        id: Integer;
        firstName: string;
        lastName: string;
        birthdate: string;
        bio?: string;
        gender: string;
        city: string;
        role: string;
        verificationStatus: string;
        nationality: string;
        relationshipStatus: 'FRIEND' | 'REQUESTED' | 'PENDING' | null;
        media?: Media;
        team?: Team;
        country: Country;
    }

    export interface Player {
        id: Integer;
        firstName: string;
        lastName: string;
        birthdate: string;
        bio?: string;
        gender: string;
        city: string;
        role: string;
        verificationStatus: string;
        nationality: string;
        height?: number;
        weight?: number;
        strongFoot?: string;
        otherPosition?: string;
        primaryPosition?: string;
        relationshipStatus: 'FRIEND' | 'REQUESTED' | 'PENDING' | null;
        media?: Media;
        team?: Team;
        parent?: Other;
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

export interface PlayerAdmin extends Player {
    email: string;
    number: string;
}
export interface CoachAdmin extends Coach {
    email: string;
    number: string;
}
export interface ScoutAdmin extends Scout {
    email: string;
    number: string;
}
export interface AgentAdmin extends Agent {
    email: string;
    number: string;
}
export interface OtherAdmin extends Other {
    email: string;
    number: string;
}
export interface ListUsersAdminResponseSuccess{
    data: {
        users: PlayerAdmin[] | CoachAdmin[] | AgentAdmin[] | ScoutAdmin[] | OtherAdmin[];
        total: Integer
    };
    message: string;
}
export interface ListUsersResponseFail{
    message: string;
}