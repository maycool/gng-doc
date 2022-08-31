import {
  endpoint,
  request,
  response,
  body,
  Integer,
  headers,
  queryParams,
  pathParams,
} from "@airtasker/spot";
import {
  GetUserNetworkRequest,
  Player,
  Coach,
  Agent,
  Scout,
  Other,
} from "../types";
/** The list returns all user statuses even rejected that are connected to the user sending the request through their network */
@endpoint({
  method: "GET",
  path: "/users/:id/network",
  tags: ["Users"],
})
class Get_User_Network {
  @request
  request(
    @queryParams queryParams: GetUserNetworkRequest,
    @pathParams
    pathParams: {
      id: Integer;
    }
  ) {}

  /** Response models */
  @response({ status: 200 })
  Response(@body body: GetUsersNetworkResponseSuccess) {}

  @response({ status: 400 })
  badRequestResponse(@body body: GetUsersNetworkResponseFail) {}
}

/** Gets my network  */
@endpoint({
  method: "GET",
  path: "/users/network",
  tags: ["Users"],
})
class Get_My_Network {
  @request
  request(@queryParams queryParams: GetUserNetworkRequest) {}
  /** Response models */
  @response({ status: 200 })
  Response(@body body: GetUsersNetworkResponseSuccess) {}

  @response({ status: 500 })
  badRequestResponse(@body body: GetUsersNetworkResponseFail) {}
}

export interface GetUsersNetworkResponseSuccess {
  data: Player[] | Coach[] | Agent[] | Scout[] | Other[];
  message: string;
}
export interface GetUsersNetworkResponseFail {
  message: string;
}
