import { endpoint, request, response, body, Integer, headers, queryParams , pathParams } from "@airtasker/spot";
import { ListExperienceFail,ListExperienceSuccess} from './types'

@endpoint({
    method: "GET",
    path: "/users/:id/experience",
    tags: ["Users"]
  })
  class GetUserExperience {
    @request
    request( @pathParams pathParams: {
      id: Integer;
    }) {}
    /** Response models */
    @response({ status: 200 })
    Response(@body body: ListExperienceSuccess) {}

    @response({ status: 400 })
    badRequestResponse(@body body: ListExperienceFail) {}
  }