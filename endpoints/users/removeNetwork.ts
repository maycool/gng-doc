import { endpoint, request, response, body, headers, queryParams, Integer } from "@airtasker/spot";

@endpoint({
    method: "PATCH",
    path: "/users/network/{id}/remove",
    tags: ["Users"]
})
class RemoveConnection {
    @request
    request(@headers headers: RemoveConnectionHeaders) {}

    @response({ status: 200 })
    successResponse(@body body: RemoveConnectionSuccessResponse) {}

    @response({ status: 400 })
    badRequestResponse(@body body: RemoveConnectionFailureResponse) {}

    @response({ status: 401 })
    response(@body body: RemoveConnectionUnauthorized) {}
}

interface RemoveConnectionHeaders {
    "Accept-Language":string
}

interface RemoveConnectionSuccessResponse {
    data : "Connection removed successfully";
}

interface RemoveConnectionFailureResponse {
    message: string
}

interface RemoveConnectionUnauthorized {
    data : "Unauthorized";
}
