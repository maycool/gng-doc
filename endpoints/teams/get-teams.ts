import {
  endpoint,
  request,
  response,
  body,
  queryParams,
  Integer,
} from "@airtasker/spot";

import { TeamsAdminResponseObject, TeamsMobileResponseObject } from "../types";
@endpoint({
  method: "GET",
  path: "/teams",
  tags: ["Teams"],
})
class Get_Teams {
  @request
  request(@queryParams queryParams: GetTeamsQueryString) {}

  /** Mobile user response */
  @response({ status: 200 })
  mobileResponse(@body body: GetTeamsMobileResponseSuccess) {}

  /** Admin user response */
  @response({ status: 201 })
  adminResponse(@body body: GetTeamsAdminResponseSuccess) {}

  @response({ status: 500 })
  badRequestResponse(@body body: GetTeamsResponseFail) {}
}

interface GetTeamsQueryString {
  name?: string;
  status?: "APPROVED" | "PENDING";
  type?: "NATIONAL" | "CLUB";
  countryId?: Integer;
}

interface TeamAdminEntry {
  id: TeamsAdminResponseObject;
}

interface GetTeamsAdminResponseSuccess {
  message: string;
  data: {
    /** Team ID in string format */
    teams: TeamAdminEntry[];
    total: Integer;
  };
}

interface GetTeamsMobileResponseSuccess {
  message: string;
  data: TeamsMobileResponseObject[];
}

interface GetTeamsResponseFail {
  message: string;
}
