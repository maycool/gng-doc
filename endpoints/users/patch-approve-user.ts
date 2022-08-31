import {
  endpoint,
  request,
  response,
  body,
  headers,
  queryParams,
  Integer,
} from "@airtasker/spot";

@endpoint({
  method: "PATCH",
  path: "/users/{id}/approve",
  tags: ["Users"],
})
class Patch_Approve_User {
  @request
  request() {}

  @response({ status: 200 })
  successResponse(@body body: ApproveUserResponseSuccess) {}

  @response({ status: 500 })
  badRequestResponse(@body body: ApproveUserResponseFail) {}

  @response({ status: 403 })
  response(@body body: ApproveUserResponseUnauthorized) {}
}

interface ApproveUserResponseSuccess {
  message: string;
}

interface ApproveUserResponseFail {
  message: string;
}

interface ApproveUserResponseUnauthorized {
  message: string;
}
