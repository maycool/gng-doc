import {
  endpoint,
  request,
  response,
  body,
  Integer,
  pathParams,
} from "@airtasker/spot";
import { Player, Coach, Agent, Other } from "../types";
@endpoint({
  method: "GET",
  path: "/users/:id/professional-connections",
  tags: ["Users"],
})
class Get_Professional_Connections {
  @request
  request(@pathParams pathParams: { id: Integer }) {}

  @response({ status: 200 })
  Response(@body body: GetProfessionalConnectionsResponseSuccess) {}

  @response({ status: 400 })
  badRequestResponse(@body body: GetProfessionalConnectionsResponseFail) {}
}

interface GetProfessionalConnectionsResponseSuccess {
  data: Player[] | Coach[] | Agent | Other;
  message: string;
}

export interface GetProfessionalConnectionsResponseFail {
  message: string;
}
