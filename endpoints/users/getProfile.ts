import { endpoint, request, response, body, Integer, headers, queryParams  } from "@airtasker/spot";
import {ProfileResponseSuccess, ListUsersResponseFail} from "./types";
/** Gets the user basic profile info */
@endpoint({
    method: "GET",
    path: "/users/profile",
    tags: ["Users"]
  })
  class GetUserProfile {
    @request
    request() {}


    /** Response models */
    @response({ status: 200 })
    Response(@body body: ProfileResponseSuccess) {}

    @response({ status: 400 })
    badRequestResponse(@body body: ListUsersResponseFail) {}
  }


