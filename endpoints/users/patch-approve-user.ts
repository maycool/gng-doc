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

  @response({ status: 400 })
  badRequestResponse(@body body: ApproveUserResponseFail) {}

  @response({ status: 401 })
  response(@body body: ApproveUserResponseUnauthorized) {}
}

interface ApproveUserResponseSuccess {
  data: string;
}

interface ApproveUserResponseFail {
  message: string;
}

interface ApproveUserResponseUnauthorized {
  message: string;
}
