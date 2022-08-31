import {
  endpoint,
  request,
  response,
  body,
  Integer,
  pathParams,
} from "@airtasker/spot";

/**ADMIN ROUTE ONLY */
@endpoint({
  method: "DELETE",
  path: "/teams/:id",
  tags: ["Teams"],
})
class Delete_Team {
  @request
  request(@pathParams pathParams: { id: Integer }) {}

  @response({ status: 200 })
  successResponse(@body body: DeleteTeamResponseSuccess) {}

  @response({ status: 500 })
  badRequestResponse(@body body: DeleteTeamResponseFail) {}
}

interface DeleteTeamResponseSuccess {
  message: string;
}

interface DeleteTeamResponseFail {
  message: string;
}
