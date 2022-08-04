import { endpoint, request, response, body, Integer, headers, queryParams  } from "@airtasker/spot";
import {ListUsersResponseSuccess, ListUsersResponseFail} from "./types";
/** The list returns all user statuses even rejected that are connected to the user sending the request through their network */
@endpoint({
    method: "GET",
    path: "/users/network",
    tags: ["Users"]
  })
  class GetUserNetwork {
    @request
    request(@queryParams queryParams: ListNetwork) {}


    /** Response models */
    @response({ status: 200 })
    Response(@body body: ListUsersResponseSuccess) {}

    @response({ status: 400 })
    badRequestResponse(@body body: ListUsersResponseFail) {}
  }
  interface ListNetwork {
    role?: 'PLAYER' | 'COACH' | 'SCOUT' | 'OTHER' | 'AGENT';
    name?: string;
    limit: Integer;
    offset: Integer;
  }

