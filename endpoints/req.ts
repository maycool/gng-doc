import { endpoint, request, response, body, headers, queryParams } from "@airtasker/spot";

@endpoint({
    method: "POST",
    path: "/users/{toId}/requests/"
})
class CreateRequest {
    @request
    request(@headers headers: CreateRequestHeaders, @body body: CreateRequestBody) {}

    @response({ status: 200 })
    successResponse(@body body: CreateRequestSuccessResponse) {}

    @response({ status: 400 })
    badRequestResponse(@body body: CreateRequestFailureResponse) {}
}

interface CreateRequestHeaders {
    "Accept-Language":string
}

interface CreateRequestBody {
    "type": 'FRIEND' | 'AGENT' | 'PARENT' | 'SCOUT';
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
class getPendingRequests {
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
    limit: number;
    offset: number;
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
        mediaUrl?:string;
        teamName?:string;
    }
    createdAt:string;
    status:string;
}

@endpoint({
    method: "PATCH",
    path: "/requests/{id}/accept"
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
    method: "PATCH",
    path: "/requests/{id}/decline"
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


@endpoint({
    method: "PATCH",
    path: "/requests/{id}/cancel"
})
class CancelRequest {
    @request
    request(@headers headers: CancelRequestHeaders) {}

    @response({ status: 200 })
    successResponse(@body body: CancelRequestSuccessResponse) {}

    @response({ status: 400 })
    badRequestResponse(@body body: CancelRequestFailureResponse) {}
}

interface CancelRequestHeaders {
    "Accept-Language":string
}

interface CancelRequestSuccessResponse {
    message:string
}

interface CancelRequestFailureResponse {
    message: string
}   



@endpoint({
    method: "PATCH",
    path: "/requests/{friendId}/unfriend"
})
class UnFriendRequest {
    @request
    request(@headers headers: UnFriendRequestHeaders) {}

    @response({ status: 200 })
    successResponse(@body body: UnFriendRequestSuccessResponse) {}

    @response({ status: 400 })
    badRequestResponse(@body body: UnFriendRequestFailureResponse) {}
}

interface UnFriendRequestHeaders {
    "Accept-Language":string
}

interface UnFriendRequestSuccessResponse {
    message:string
}

interface UnFriendRequestFailureResponse {
    message: string
}