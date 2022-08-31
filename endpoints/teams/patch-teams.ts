import {
  endpoint,
  request,
  response,
  body,
  Integer,
  pathParams,
} from "@airtasker/spot";
import { PatchTeamRequest } from "../types";

/**ADMIN ROUTE ONLY */
@endpoint({
  method: "PATCH",
  path: "/teams/:id",
  tags: ["Teams"],
})
class Patch_Team {
  @request
  request(
    @body body: PatchTeamRequest,
    @pathParams
    pathParams: {
      id: Integer;
    }
  ) {}

  @response({ status: 200 })
  successResponse(@body body: PatchTeamResponseSuccess) {}

  @response({ status: 500 })
  badRequestResponse(@body body: PatchTeamResponseFail) {}
}

interface PatchTeamResponseSuccess {
  message: string;
}

interface PatchTeamResponseFail {
  message: string;
}
