import { endpoint, request, response, body, Integer, pathParams  } from "@airtasker/spot";
import {GetUserVerificationFormSuccess, GetUserVerificationFormFail} from "./types";
/** Gets the user basic profile info */
@endpoint({
    method: "GET",
    path: "/users/:id/form",
    tags: ["Users"]
  })
  class GetUserVerificationForm {
    @request
    request(@pathParams pathParams: {
      id: Integer;
    }) {}


    /** Response models */
    @response({ status: 200 })
    Response(@body body: GetUserVerificationFormSuccess) {}

    @response({ status: 400 })
    badRequestResponse(@body body: GetUserVerificationFormFail) {}
  }


