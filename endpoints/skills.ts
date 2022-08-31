import { endpoint, request, response, body, Integer } from "@airtasker/spot";

@endpoint({
  method: "POST",
  path: "/skills",
  tags: ["Skills"],
})
class CreateSkill {
  @request
  request(@body body: CreateSkillRequest) {}

  @response({ status: 200 })
  successResponse(@body body: CreateSkillSuccessResponse) {}

  @response({ status: 400 })
  badRequestResponse(@body body: CreateSkillFailureResponse) {}
}

interface CreateSkillRequest {
  nameAr: string;
  nameEn: string;
  role: "PLAYER" | "COACH" | "SCOUT" | "AGENT" | "OTHER";
}

interface CreateSkillSuccessResponse {
  message: string;
}

interface CreateSkillFailureResponse {
  message: string;
}

@endpoint({
  method: "GET",
  path: "/skills?limit=10&offset=0&status=approved&role=player&name=football",
  tags: ["Skills"],
})
class ListSkill {
  @request
  request(@body body: ListSkillRequest) {}

  @response({ status: 200 })
  successResponse(@body body: ListSkillSuccessResponse) {}
  /** Admin response models */
  @response({ status: 201 })
  adminResponse(@body body: ListSkillSuccessAdminResponse) {}

  @response({ status: 400 })
  badRequestResponse(@body body: ListSkillFailureResponse) {}
}

interface ListSkillRequest {
  id: number;
  role: "PLAYER" | "COACH" | "SCOUT" | "AGENT" | "OTHER";
  status: "APPROVED" | "PENDING";
  name: string;
  lang: "EN" | "AR";
}
interface SkillAdminObject {
  /** Skill ID */
  id: Integer;
  role: "PLAYER" | "COACH" | "SCOUT" | "AGENT" | "OTHER";
  status: "APPROVED" | "PENDING";
  names: {
    /** Localized Skill ID */
    id: Integer;
    name: string;
    lang: "AR" | "EN";
  };
}
interface SkillAdminEntry {
  id: SkillAdminObject;
}
interface ListSkillSuccessAdminResponse {
  data: {
    /** Skill ID in string format */
    skills: SkillAdminEntry[];
    total: Integer;
  };
  message: string;
}
interface ListSkillSuccessResponse {
  message: string;
}

interface ListSkillFailureResponse {
  message: string;
}

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
