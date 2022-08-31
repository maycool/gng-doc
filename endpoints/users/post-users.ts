import { endpoint, request, response, body } from "@airtasker/spot";
import { CreateUserRequest } from "../types";
@endpoint({
  method: "POST",
  path: "/users",
  tags: ["Users"],
})
class Post_User {
  @request
  request(@body body: CreateUserRequest) {}

  @response({ status: 200 })
  successResponse(@body body: CreateUserSuccessResponse) {}

  @response({ status: 500 })
  badRequestResponse(@body body: CreateUserFailureResponse) {}
}

interface CreateUserSuccessResponse {
  message: string;
}

interface CreateUserFailureResponse {
  message: string;
}
