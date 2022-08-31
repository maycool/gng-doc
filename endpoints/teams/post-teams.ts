import { endpoint, request, response, body, Integer } from "@airtasker/spot";
import { CreateTeamsRequestBody } from "../types";
@endpoint({
  method: "POST",
  path: "/teams",
  tags: ["Teams"],
})
class Post_Team {
  @request
  request(@body body: CreateTeamsRequestBody) {}

  @response({ status: 200 })
  successResponse(@body body: CreateTeamsResponseSuccess) {}

  @response({ status: 500 })
  badRequestResponse(@body body: CreateTeamsResponseFail) {}
}

interface CreateTeamsResponseSuccess {
  data: string;
}
interface CreateTeamsResponseFail {
  data: string;
}
