import { endpoint, request, response, body, Integer } from "@airtasker/spot";

@endpoint({
  method: "PATCH",
  path: "/skills/{id}",
  tags: ["Skills"],
})
class EditSkill {
  @request
  request(@body body: EditSkillRequest) {}

  @response({ status: 200 })
  successResponse(@body body: EditSkillSuccessResponse) {}

  @response({ status: 400 })
  badRequestResponse(@body body: EditSkillFailureResponse) {}
}

interface EditSkillRequest {
  nameAr: string;
  nameEn: string;
  role: "PLAYER" | "COACH" | "SCOUT" | "AGENT" | "OTHER";
  status: "PENDING" | "APPROVED";
}

interface EditSkillSuccessResponse {
  message: string;
}

interface EditSkillFailureResponse {
  message: string;
}

@endpoint({
  method: "DELETE",
  path: "/skills/{id}",
  tags: ["Skills"],
})
class DeleteSkill {
  @response({ status: 200 })
  successResponse(@body body: DeleteSkillSuccessResponse) {}

  @response({ status: 400 })
  badRequestResponse(@body body: DeleteSkillFailureResponse) {}
}

interface DeleteSkillSuccessResponse {
  message: string;
}

interface DeleteSkillFailureResponse {
  message: string;
}
