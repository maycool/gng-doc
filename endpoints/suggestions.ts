import {endpoint, request, response, body, headers, queryParams, Integer} from "@airtasker/spot";
import {ListSuggestionsResponseSuccess, ListUsersResponseSuccess} from "./users/types";

@endpoint({
    method: "GET",
    path: "/users/suggestions?role=player",
    tags: ["Suggestions"]
})
class getSuggestions {
    @request
    request(@headers headers: GetSuggestionsHeaders) {}

    @response({ status: 200 })
    successResponse(@body body: GetSuggestionsSuccessResponse) {}

    @response({ status: 400 })
    badRequestResponse(@body body: GetSuggestionsFailureResponse) {}
}

interface GetSuggestionsData {
    firstName: string;
    lastName: string;
    birthDate: string;
    gender: 'MALE' | 'FEMALE';
    nationalityId: number;
    number: string;
    media: { id?: Integer, url?: string }
    team: { id?: Integer, name?: string }
    country: { id: Integer, url: string, name: string }
    email: string;
    city: string;
    role: 'PLAYER' | 'COACH' | 'SCOUT' | 'AGENT' | 'OTHER';
    height?: Integer;
    weight?: Integer;
    strongFoot?: 'LEFT' | 'RIGHT' | 'BOTH';
    primaryPosition?: string;
    otherPosition?: string;
    countriesCoachedIn?: dataObject[];
    totalTeamsCoached?: Integer;
    preferredFormation?: string;
    locationOfScouting?: dataObject[];
    typeOfScouting?: string;
    areasCovered?: dataObject[];
    totalCareerTransfers?: Integer;
}

interface dataObject {
    id?: Integer;
    name?: string;
}

interface GetSuggestionsHeaders {
    "Accept-Language":string
}

interface GetSuggestionsSuccessResponse{
    message: string;
    data: ListSuggestionsResponseSuccess;
}

interface GetSuggestionsFailureResponse{
    body: {
        message: string;
    };
}




@endpoint({
    method: "POST",
    path: "/users/{id}/ignore",
    tags: ["Suggestions"]
})
class ignoreSuggestions {
    @request
    request(@headers headers: IgnoreUserHeaders) {}

    @response({ status: 200 })
    successResponse(@body body: IgnoreUserSuccessfulResponse) {}

    @response({ status: 400 })
    badRequestResponse(@body body: IgnoreUserFailureResponse) {}
}

interface IgnoreUserHeaders {
    "Accept-Language":string
}

interface IgnoreUserSuccessfulResponse{
    message: string;
}

interface IgnoreUserFailureResponse{
    body: {
        message: string;
    };
}
