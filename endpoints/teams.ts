import { endpoint, request, response, body, headers, queryParams, Integer } from "@airtasker/spot";

@endpoint({
    method: "POST",
    path: "/clubs",
    tags: ["Teams"]
})
class CreateTeam {
    @request
    request(@body body: CreateTeamsRequestBody, @headers headers: CreateTeamsRequestHeaders) {}

    @response({ status: 200 })
    successResponse(@body body: CreateTeamsSuccessResponse) {}

    @response({ status: 400 })
    badRequestResponse(@body body: CreateTeamsFailureResponse) {}
}

interface CreateTeamsRequestBody {
    names: {name: string; lang: 'EN' | 'AR' | 'FR'}[]
    type?: 'NATIONAL' | 'CLUB';
    status?: 'PENDING' | 'APPROVED'; 
    mediaUrl?: string;
    countryId: Integer;
}
interface CreateTeamsRequestHeaders {
    "Accept-Language":string
}
interface CreateTeamsSuccessResponse{
    data: string;
}
interface CreateTeamsFailureResponse{
    data: string;
}


@endpoint({
    method: "GET",
    path: "/clubs",
    tags: ["Teams"]
})
class ListTeams {
    @request
    request(@headers headers: ListTeamsRequest, @queryParams queryParams: ListClubsPathParams) {}

    /** Mobile user response */
    @response({ status: 200 })
    mobileResponse(@body body: ListTeamsSuccessResponseMobile) {}
    /** Admin user response */
    @response({ status: 201 })
    adminResponse(@body body: ListTeamsSuccessResponseAdmin) {}

    @response({ status: 400 })
    badRequestResponse(@body body: ListTeamsFailureResponse) {}
}

interface ListTeamsSuccessResponseAdmin{
    message: string;
    data: TeamsDataAdmin[];
}
interface TeamsDataAdmin {
    id: number;
    type: 'NATIONAL'|'CLUB';
    status: 'PENDING'|'APPROVED';
    names: { name: string; lang: string }[];
    country: {
        id: Integer;
        name: string;
    };
    media: {
        id: Integer;
        url: string;
    };
}
interface TeamsDataMobile {
    id: number;
    name: string;
    type: 'NATIONAL'|'CLUB';
    status: 'PENDING'|'APPROVED';
    lang: string;
    country: {
        id: Integer;
        name: string;
    };
    media: {
        id: Integer;
        url: string;
    };
}

interface ListClubsPathParams {
    name?: string;
    status?: 'APPROVED' | 'PENDING';
    type?: 'NATIONAL' | 'CLUB';
    countryId?: Integer;
}

interface ListTeamsRequest {
    "Accept-Language":string
}
interface ListTeamsSuccessResponseMobile{
    message: string;
    data: TeamsDataMobile[];
}
interface ListTeamsFailureResponse{
    message: string;
}


@endpoint({
    method: "GET",
    path: "/clubs/{id}",
    tags: ["Teams"]
})
class GetTeam {
    @request
    request(@headers headers: GetTeamRequest) {}

    @response({ status: 200 })
    successResponse(@body body: GetTeamSuccessResponse) {}

    @response({ status: 400 })
    badRequestResponse(@body body: ListTeamsFailureResponse) {}
}
interface GetTeamRequest {
    "Accept-Language":string;
}
interface GetTeamSuccessResponse{
    message: string;
    data: TeamsDataMobile;
}


@endpoint({
    method: "PATCH",
    path: "/clubs/{id}",
    tags: ["Teams"]
})
class EditTeam {
    @request
    request(@body body: EditTeamRequestBody, @headers headers: EditTeamRequestHeader) {}

    @response({ status: 200 })
    successResponse(@body body: EditTeamSuccessResponse) {}

    @response({ status: 400 })
    badRequestResponse(@body body: EditTeamFailureResponse) {}
}

interface EditTeamRequestHeader {
    "Accept-Language":string;
}
interface EditTeamRequestBody {
    name?: string;
    type?: 'NATIONAL'|'CLUB';
    countryId?: number;
    status?: 'PENDING'|'APPROVED';
    mediaUrl?: string;
}
interface EditTeamSuccessResponse{
    data: string;
}

interface EditTeamFailureResponse{
    data: string;
}



@endpoint({
    method: "DELETE",
    path: "/clubs/{id}",
    tags: ["Teams"]
})
class DeleteTeam {
    @request
    request(@headers headers:DeleteTeamRequest) {}

    @response({ status: 200 })
    successResponse(@body body: DeleteTeamSuccessResponse) {}

    @response({ status: 400 })
    badRequestResponse(@body body: DeleteTeamFailureResponse) {}
}

interface DeleteTeamRequest{
    "Accept-Language":string
}
interface DeleteTeamSuccessResponse{
    message: string;
}

interface DeleteTeamFailureResponse{
    message: string;
}
