import { endpoint, request, response, body, headers, queryParams } from "@airtasker/spot";

@endpoint({
    method: "POST",
    path: "/clubs"
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
    type?: 'national-team' | 'club';
    mediaUrl?: string;
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
    path: "/clubs"
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
    status: 'PENDING'|'APPROVED';
    url: string;
}

interface ListClubsPathParams {
    name?: string;
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
    path: "/clubs/{id}"
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
    path: "/clubs/{id}"
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
    id: number;
    name?: string;
    type?: 'NATIONAL'|'CLUB';
    countryId?: number;
    status?: 'PENDING'|'APPROVED';
    url?: string;
}
interface EditTeamSuccessResponse{
    data: string;
}

interface EditTeamFailureResponse{
    data: string;
}



@endpoint({
    method: "DELETE",
    path: "/clubs/{id}"
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
