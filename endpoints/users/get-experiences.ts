import {
  endpoint,
  request,
  response,
  body,
  Integer,
  pathParams,
} from "@airtasker/spot";
import { UserExperiences } from "../types";

@endpoint({
  method: "GET",
  path: "/users/:id/experience",
  tags: ["Users"],
})
class Get_User_Experiences {
  @request
  request(@pathParams pathParams: { id: Integer }) {}
  /** Response models */
  @response({ status: 200 })
  Response(@body body: UserExperiencesResponseSuccess) {}

  @response({ status: 400 })
  badRequestResponse(@body body: ListExperienceFail) {}
}
export interface UserExperiencesResponseSuccess {
  CLUB: UserExperiences[];
  NATIONAL: UserExperiences[];
}
export interface ListExperienceFail {
  message: string;
}
