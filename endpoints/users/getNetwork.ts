import { endpoint, request, response, body, Integer, headers, queryParams , pathParams } from "@airtasker/spot";
import {ListUsersResponseFail, ListUsersAdminResponseSuccess} from "./types";
/** The list returns all user statuses even rejected that are connected to the user sending the request through their network */
@endpoint({
    method: "GET",
    path: "/users/:id/network",
    tags: ["Users"]
  })
  class GetUserNetwork {
    @request
    request(@queryParams queryParams: ListNetwork, @pathParams pathParams: {
      id: Integer;
    }) {}


    /** Response models */
    @response({ status: 200 })
    Response(@body body: ListUsersAdminResponseSuccess) {}

    @response({ status: 400 })
    badRequestResponse(@body body: ListUsersResponseFail) {}
  }

/** Gets my network  */
@endpoint({
    method: "GET",
    path: "/users/network",
    tags: ["Users"]
  })
  class GetMyNetwork {
    @request
    request(@queryParams queryParams: ListNetwork) {}
    /** Response models */
    @response({ status: 200 })
    Response(@body body: ListUsersAdminResponseSuccess) {}

    @response({ status: 400 })
    badRequestResponse(@body body: ListUsersResponseFail) {}
  }
  interface ListNetwork {
    role?: 'PLAYER' | 'COACH' | 'SCOUT' | 'OTHER' | 'AGENT';
    name?: string;
    limit: Integer;
    offset: Integer;
  }

