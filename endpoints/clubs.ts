import { endpoint, request, response, body, Integer, headers } from "@airtasker/spot";

@endpoint({
    method: "POST",
    path: "/clubs"
})
class CreateClub {
    @request
    request(@body body: CreateClubsRequestBody, @headers headers: CreateClubsRequestHeaders) {}

    @response({ status: 200 })
    successResponse(@body body: CreateClubsSuccessResponse) {}

    @response({ status: 400 })
    badRequestResponse(@body body: CreateClubsFailureResponse) {}
}

interface CreateClubsRequestBody {
    nameAr: string;
    nameEn: string;
    mediaUrl?:string;
}
interface CreateClubsRequestHeaders {
    "Accept-Language":string
}
interface CreateClubsSuccessResponse{
    body: {
        data: string;
    };
}
interface CreateClubsFailureResponse{
    body: {
        data: string;
    };
}


@endpoint({
    method: "GET",
    path: "/clubs"
})
class ListClubs {
    @request
    request(@headers headers: ListClubsRequest) {}

    @response({ status: 200 })
    successResponse(@body body: ListClubsSuccessResponse) {}

    @response({ status: 400 })
    badRequestResponse(@body body: ListClubsFailureResponse) {}
}

interface ListClubsRequest {
    "Accept-Language":string
}
interface ListClubsSuccessResponse{
    body: {
        message: string;
        data: {
            id:number;
            name:string;
            url:string;
        };
    };
}
interface ListClubsFailureResponse{
    body: {
        message: string;
    };
}


@endpoint({
    method: "GET",
    path: "/clubs/{id}"
})
class GetClub {
    @request
    request(@headers headers: GetClubRequest) {}

    @response({ status: 200 })
    successResponse(@body body: ListClubsSuccessResponse) {}

    @response({ status: 400 })
    badRequestResponse(@body body: ListClubsFailureResponse) {}
}
interface GetClubRequest {
    "Accept-Language":string;
}


@endpoint({
    method: "PATCH",
    path: "/clubs/{id}"
})
class EditClub {
    @request
    request(@body body: EditClubRequestBody, @headers headers: EditClubRequestHeader) {}

    @response({ status: 200 })
    successResponse(@body body: EditClubSuccessResponse) {}

    @response({ status: 400 })
    badRequestResponse(@body body: EditClubFailureResponse) {}
}

interface EditClubRequestHeader {
    "Accept-Language":string;
}
interface EditClubRequestBody {
    body: {
        nameAr?: string;
        nameEn?: string;
        mediaUrl?: string;
    };
}
interface EditClubSuccessResponse{
    body: {
        data: string;
    };
}

interface EditClubFailureResponse{
    body: {
        data: string;
    };
}



@endpoint({
    method: "DELETE",
    path: "/clubs/{id}"
})
class DeleteClub {
    @request
    request(@headers headers:DeleteClubRequest) {}

    @response({ status: 200 })
    successResponse(@body body: DeleteClubSuccessResponse) {}

    @response({ status: 400 })
    badRequestResponse(@body body: DeleteClubFailureResponse) {}
}

interface DeleteClubRequest{
    "Accept-Language":string
}
interface DeleteClubSuccessResponse{
    body: {
        message: string;
    };
}

interface DeleteClubFailureResponse{
    body: {
        message: string;
    };
}
