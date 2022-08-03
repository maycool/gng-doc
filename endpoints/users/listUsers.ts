import { endpoint, request, response, body, Integer, headers, queryParams  } from "@airtasker/spot";
import {ListUsersResponseSuccess, ListUsersResponseFail} from "./types";
/** A general listing method for users with filters */
@endpoint({
    method: "GET",
    path: "/users",
    tags: ["Users"]
  })
  class GetUsers {
    @request
    request(@queryParams queryParams: ListUsersParams) {}
  
       /** Response models */
       @response({ status: 200 })
       ScoutResponse(@body body: ListUsersResponseSuccess) {}
   
       @response({ status: 400 })
       badRequestResponse(@body body: ListUsersResponseFail) {}
  }
  
  
interface ListUsersParams {
    role?: 'PLAYER' | 'COACH' | 'SCOUT' | 'OTHER' | 'AGENT';
    name?: string;
    /** If set to true returns only verified users, if set to false returns unverified, verified, pending users and discards rejected */
    isVerified?: boolean;
    limit: Integer;
    offset: Integer;
}
