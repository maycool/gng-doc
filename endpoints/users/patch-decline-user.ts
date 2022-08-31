import { endpoint, request, response, body } from "@airtasker/spot";

@endpoint({
  method: "PATCH",
  path: "/users/{id}/decline",
  tags: ["Users"],
})
class Patch_Decline_User_Request {
  @request
  request() {}

  @response({ status: 200 })
  successResponse(@body body: DeclineUserSuccessResponse) {}

  @response({ status: 500 })
  badRequestResponse(@body body: DeclineUserResponseFail) {}

  @response({ status: 403 })
  response(@body body: DeclineUserResponseUnauthorized) {}
}

interface DeclineUserSuccessResponse {
  message: string;
}

interface DeclineUserResponseFail {
  message: string;
}

interface DeclineUserResponseUnauthorized {
  data: string;
}