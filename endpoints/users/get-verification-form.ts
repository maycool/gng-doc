import {
  endpoint,
  request,
  response,
  body,
  Integer,
  pathParams,
} from "@airtasker/spot";
import { UserVerificationForm } from "../types";
@endpoint({
  method: "GET",
  path: "/users/:id/form",
  tags: ["Users"],
})
class Get_User_Verification_Form {
  @request
  request(@pathParams pathParams: { id: Integer }) {}

  /** Response models */
  @response({ status: 200 })
  Response(@body body: UserVerificationForm) {}

  @response({ status: 400 })
  badRequestResponse(@body body: GetUserVerificationFormFail) {}
}
interface GetUserVerificationFormFail {
  message: string;
}
