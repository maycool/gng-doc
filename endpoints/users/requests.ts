import { endpoint, request, response, body, Integer, pathParams, queryParams  } from "@airtasker/spot";
@endpoint({
    method: "PATCH",
    path: "/users/:userId/request/cancel",
    tags: ["Users"]
  })
  class CancelRequestByUserId {
    @request
    request(@body body: DeclineRequestBody, @pathParams pathParams: {
        userId: Integer;
      }) {}
  

    @response({ status: 200 })
    Response(@body body: DeclineResponse) {}

    @response({ status: 400 })
    badRequestResponse(@body body: DeclineResponse) {}
  }

@endpoint({
    method: "PATCH",
    path: "/users/:userId/request/accept",
    tags: ["Users"]
  })
  class AcceptRequestByUserId {
    @request
    request(@body body: DeclineRequestBody, @pathParams pathParams: {
        userId: Integer;
      }) {}
  

    @response({ status: 200 })
    Response(@body body: DeclineResponse) {}

    @response({ status: 400 })
    badRequestResponse(@body body: DeclineResponse) {}
  }

@endpoint({
    method: "PATCH",
    path: "/users/:userId/request/decline",
    tags: ["Users"]
  })
  class DeclineRequestByUserId {
    @request
    request(@body body: DeclineRequestBody, @pathParams pathParams: {
        userId: Integer;
      }) {}
  

    @response({ status: 200 })
    Response(@body body: DeclineResponse) {}

    @response({ status: 400 })
    badRequestResponse(@body body: DeclineResponse) {}
  }


interface DeclineResponse {
    message: string;
}
interface DeclineRequestBody{
    type: 'FRIEND' | 'SCOUT' | 'AGENT' | 'PARENT'
}