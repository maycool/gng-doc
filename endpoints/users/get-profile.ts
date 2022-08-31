import {
  endpoint,
  request,
  response,
  body,
  Integer,
  headers,
  queryParams,
} from "@airtasker/spot";
import { Player, Coach, Agent, Scout, Other } from "../types";
/** Gets the user basic profile info */
@endpoint({
  method: "GET",
  path: "/users/profile",
  tags: ["Users"],
})
class Get_Profile {
  @request
  request() {}

  /** Response models */
  @response({ status: 200 })
  Response(@body body: GetProfileResponseSuccess) {}

  @response({ status: 400 })
  badRequestResponse(@body body: GetProfileResponseFail) {}
}
export interface GetProfileResponseSuccess {
  data: Player | Coach | Agent | Scout | Other;
  message: string;
}
export interface GetProfileResponseFail {
  message: string;
}
