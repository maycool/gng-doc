import { endpoint, request, response, body, headers, queryParams, Integer } from "@airtasker/spot";

@endpoint({
    method: "PATCH",
    path: "/users/{id}/decline",
    tags: ["Users"]
})
class DeclineUser {
    @request
    request(@headers headers: DeclineUserHeaders) {}

    @response({ status: 200 })
    successResponse(@body body: DeclineUserSuccessResponse) {}

    @response({ status: 400 })
    badRequestResponse(@body body: DeclineUserFailureResponse) {}

    @response({ status: 401 })
    response(@body body: DeclineUserUnauthorized) {}
}

interface DeclineUserHeaders {
    "Accept-Language":string
}

interface DeclineUserSuccessResponse {
    data : "User declined successfully";
}

interface DeclineUserFailureResponse {
    message: string
}

interface DeclineUserUnauthorized {
    data : "Unauthorized";
}
