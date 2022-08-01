import { endpoint, request, response, body, headers, queryParams } from "@airtasker/spot";

@endpoint({
    method: "POST",
    path: "/users/{toId}/requests/"
})
class CreateRequest {
    @request
    request(@headers headers: CreateRequestHeaders) {}

    @response({ status: 200 })
    successResponse(@body body: CreateRequestSuccessResponse) {}

    @response({ status: 400 })
    badRequestResponse(@body body: CreateRequestFailureResponse) {}
}

interface CreateRequestHeaders {
    "Accept-Language":string
}

interface CreateRequestSuccessResponse {
    data : {
        id:number;
    };
    message:string;
}

interface CreateRequestFailureResponse {
    message: string
}


@endpoint({
    method: "GET",
    path: "/users/{id}/requests/"
})
class getAllRequests {
    @request
    request(@headers headers: GetRequestHeaders, @queryParams queryParams: GetRequrestParam) {}

    @response({ status: 200 })
    successResponse(@body body: GetRequestSuccessResponse) {}

    @response({ status: 400 })
    badRequestResponse(@body body: GetRequestFailureResponse) {}
}

interface GetRequestHeaders {
    "Accept-Language":string
}

interface GetRequrestParam {
    limit: string;
    offset: string;
}

interface GetRequestSuccessResponse {
    data: DataContent[];
    message:string
}

interface GetRequestFailureResponse {
    message: string
}

interface DataContent {
    id: number;
    user:{
        firstName:string;
        lastName:string;
        mediaUrl:string;
        clubName:string;
    }
    createdAt:string;
}

@endpoint({
    method: "PATCH",
    path: "/requests/{id}"
})
class AcceptRequest {
    @request
    request(@headers headers: AcceptRequestHeaders) {}

    @response({ status: 200 })
    successResponse(@body body: AcceptRequestSuccessResponse) {}

    @response({ status: 400 })
    badRequestResponse(@body body: AcceptRequestFailureResponse) {}
}

interface AcceptRequestHeaders {
    "Accept-Language":string
}

interface AcceptRequestSuccessResponse {
    message:string
}

interface AcceptRequestFailureResponse {
    message: string
}

@endpoint({
    method: "DELETE",
    path: "/requests/{id}"
})
class DeclineRequest {
    @request
    request(@headers headers: DeclineRequestHeaders) {}

    @response({ status: 200 })
    successResponse(@body body: DeclineRequestSuccessResponse) {}

    @response({ status: 400 })
    badRequestResponse(@body body: DeclineRequestFailureResponse) {}
}

interface DeclineRequestHeaders {
    "Accept-Language":string
}

interface DeclineRequestSuccessResponse {
    message:string
}

interface DeclineRequestFailureResponse {
    message: string
}