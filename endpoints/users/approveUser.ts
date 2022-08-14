import { endpoint, request, response, body, headers, queryParams, Integer } from "@airtasker/spot";

@endpoint({
    method: "PATCH",
    path: "/users/{id}/approve",
    tags: ["Users"]
})
class ApproveUser {
    @request
    request(@headers headers: ApproveUserHeaders) {}

    @response({ status: 200 })
    successResponse(@body body: ApproveUserSuccessResponse) {}

    @response({ status: 400 })
    badRequestResponse(@body body: ApproveUserFailureResponse) {}

    @response({ status: 401 })
    response(@body body: ApproveUserUnauthorized) {}
}

interface ApproveUserHeaders {
    "Accept-Language":string
}

interface ApproveUserSuccessResponse {
    data : "User verified successfully";
}

interface ApproveUserFailureResponse {
    message: string
}

interface ApproveUserUnauthorized {
    message: "Unauthorized"
}
