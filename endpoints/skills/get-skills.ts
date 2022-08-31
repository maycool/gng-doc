import {
  endpoint,
  request,
  response,
  queryParams,
  Integer,
  body,
} from "@airtasker/spot";
import { SkillAdminResponseObject } from "../types";
@endpoint({
  method: "GET",
  path: "/skills",
  tags: ["Skills"],
})
class Get_Skills {
  @request
  request(@queryParams queryParams: GetSkillsQueryParams) {}

  @response({ status: 200 })
  successResponse(@body body: GetSkillsMobileResponseSuccess) {}
  /** Admin response models */
  @response({ status: 201 })
  adminResponse(@body body: GetSkillsAdminResponseSuccess) {}

  @response({ status: 500 })
  badRequestResponse(@body body: GetSkillsResponseFailure) {}
}

interface GetSkillsQueryParams {
  id?: number;
  role?: "PLAYER" | "COACH" | "SCOUT" | "AGENT" | "OTHER";
  status?: "APPROVED" | "PENDING";
  name?: string;
  lang?: "EN" | "AR";
}

interface SkillAdminEntry {
  id: SkillAdminResponseObject;
}

interface GetSkillsAdminResponseSuccess {
  data: {
    /** Skill ID in string format */
    skills: SkillAdminEntry[];
    total: Integer;
  };
  message: string;
}
// TODO NEEDS CHECKING
interface GetSkillsMobileResponseSuccess {
  skills: SkillAdminEntry[];
  message: string;
}

interface GetSkillsResponseFailure {
  message: string;
}
