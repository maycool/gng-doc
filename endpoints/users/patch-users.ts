import {
  endpoint,
  request,
  response,
  body,
  Integer,
  pathParams,
} from "@airtasker/spot";
import { PatchUserRequest } from "../types";
@endpoint({
  method: "PATCH",
  path: "/users/:id",
  tags: ["Users"],
})
class Patch_User {
  @request
  request(
    @body body: PatchUserRequest,
    @pathParams
    pathParams: {
      id: Integer;
    }
  ) {}

  /** Response models */
  @response({ status: 200 })
  Response(@body body: PatchUsersResponseSuccessFail) {}

  @response({ status: 500 })
  badRequestResponse(@body body: PatchUsersResponseSuccessFail) {}
}
interface PatchUsersResponseSuccessFail {
  message: string;
}
