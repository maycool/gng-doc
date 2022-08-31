import {
  endpoint,
  request,
  response,
  body,
  Integer,
  queryParams,
} from "@airtasker/spot";
import {
  Player,
  Coach,
  Agent,
  Scout,
  Other,
  PlayerAdmin,
  CoachAdmin,
  AgentAdmin,
  ScoutAdmin,
  OtherAdmin,
  GetUsersRequest,
} from "../types";

/** A general listing method for users with filters */
@endpoint({
  method: "GET",
  path: "/users",
  tags: ["Users"],
})
class Get_Users {
  @request
  request(@queryParams queryParams: GetUsersRequest) {}

  /** Response models */
  @response({ status: 200 })
  Response(@body body: GetUsersResponseSuccess) {}

  /** Admin response models */
  @response({ status: 201 })
  AdminResponse(@body body: GetUsersAdminResponseSuccess) {}

  @response({ status: 500 })
  badRequestResponse(@body body: GetUsersResponseFail) {}
}

export interface GetUsersResponseSuccess {
  data: Player[] | Coach[] | Agent[] | Scout[] | Other[];
  message: string;
}
export interface GetUsersAdminResponseSuccess {
  data: {
    users:
      | PlayerAdmin[]
      | CoachAdmin[]
      | AgentAdmin[]
      | ScoutAdmin[]
      | OtherAdmin[];
    total: Integer;
  };
  message: string;
}
export interface GetUsersResponseFail {
  message: string;
}
