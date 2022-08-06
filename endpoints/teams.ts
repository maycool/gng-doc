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
    nameAr?: string;
    nameEn?: string;
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

    @response({ status: 200 })
    successResponse(@body body: ListTeamsSuccessResponse) {}

    @response({ status: 400 })
    badRequestResponse(@body body: ListTeamsFailureResponse) {}
}

interface TeamsData {
    id: number;
    name: string;
    type: 'NATIONAL'|'CLUB';
    countryId: number;
    countryName: string;
    status: 'PENDING'|'APPROVED';
    url: string;
}

interface ListClubsPathParams {
    name?: string;
    status?: string;
    type?: string;
    countryId?: Integer;
}

interface ListTeamsRequest {
    "Accept-Language":string
}
interface ListTeamsSuccessResponse{
    message: string;
    data: TeamsData[];
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
    data: TeamsData;
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
