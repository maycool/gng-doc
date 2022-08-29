import { endpoint, request, response, body, headers, queryParams, Integer, pathParams } from "@airtasker/spot";

@endpoint({
    method: "POST",
    path: "/teams",
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
    path: "/teams",
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

interface TeamAdminEntry {
    id: TeamsDataAdmin
}
interface ListTeamsSuccessResponseAdmin{
    message: string;
    data: {
        /** Team ID in string format */
        teams: TeamAdminEntry[];
        total: Integer;
    };
}
interface TeamsDataAdmin {
    id: number;
    type: 'NATIONAL'|'CLUB';
    status: 'PENDING'|'APPROVED';
    names: { id:Integer; name: string; lang: string }[];
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

/**ADMIN ROUTE ONLY */
@endpoint({
    method: "PATCH",
    path: "/teams/:id",
    tags: ["Teams"]
})
class EditTeam {
    @request
    request(@body body: EditTeamRequestBody,@pathParams pathParams: {
        id: Integer;
      }) {}

    @response({ status: 200 })
    successResponse(@body body: EditTeamSuccessResponse) {}

    @response({ status: 400 })
    badRequestResponse(@body body: EditTeamFailureResponse) {}
}


interface EditTeamRequestBody {
    type?: 'NATIONAL'|'CLUB';
    countryId?: Integer;
    mediaUrl?: string;
    status?: 'PENDING'|'APPROVED';
    names?: {id?: Integer; name: string; lang: string}[];
}
interface EditTeamSuccessResponse{
    message: string;
}

interface EditTeamFailureResponse{
    message: string;
}



@endpoint({
    method: "DELETE",
    path: "/teams/:id",
    tags: ["Teams"]
})
class DeleteTeam {
    @request
    request(@pathParams pathParams: {
        id: Integer;
      }) {}

    @response({ status: 200 })
    successResponse(@body body: DeleteTeamSuccessResponse) {}

    @response({ status: 400 })
    badRequestResponse(@body body: DeleteTeamFailureResponse) {}
}

interface DeleteTeamSuccessResponse{
    message: string;
}

interface DeleteTeamFailureResponse{
    message: string;
}
