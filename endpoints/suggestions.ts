import {endpoint, request, response, body, headers, queryParams, Integer} from "@airtasker/spot";

@endpoint({
    method: "POST",
    path: "/users/suggestions?role=player"
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
    data: GetSuggestionsData[];
}

interface GetSuggestionsFailureResponse{
    body: {
        message: string;
    };
}
