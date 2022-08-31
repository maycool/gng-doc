import { endpoint, request, response, body, Integer, headers, queryParams  } from "@airtasker/spot";
import {ListUsersResponseSuccess, ListUsersResponseFail, ListUsersAdminResponseSuccess} from "./types";
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
       Response(@body body: ListUsersResponseSuccess) {}
       
       /** Admin response models */
       @response({ status: 201 })
       AdminResponse(@body body: ListUsersAdminResponseSuccess) {}
   
       @response({ status: 400 })
       badRequestResponse(@body body: ListUsersResponseFail) {}
  }
  
  
interface ListUsersParams {
    role?: 'PLAYER' | 'COACH' | 'SCOUT' | 'OTHER' | 'AGENT';
    /** Only admin can search with email or number or name in this field */
    name?: string;
    /** If set to true returns only verified users, if set to false returns unverified, verified, pending users and discards rejected */
    isVerified?: boolean;
    /** A flag to get the rejected users with the returned set */
    getRejected?: boolean;
    number?: string;
    limit: Integer;
    offset: Integer;
}
