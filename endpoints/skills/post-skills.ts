import { endpoint, request, response, body, Integer } from "@airtasker/spot";
import { CreateSkillRequest } from "../types";
@endpoint({
  method: "POST",
  path: "/skills",
  tags: ["Skills"],
})
class Post_Skill {
  @request
  request(@body body: CreateSkillRequest) {}

  @response({ status: 200 })
  successResponse(@body body: CreateSkillResponseSuccess) {}

  @response({ status: 500 })
  badRequestResponse(@body body: CreateSkillResponseFailure) {}
}

interface CreateSkillResponseSuccess {
  message: string;
}

interface CreateSkillResponseFailure {
  message: string;
}
