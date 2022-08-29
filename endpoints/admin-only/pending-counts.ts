import { endpoint, request, response, body, Integer, headers, queryParams , pathParams } from "@airtasker/spot";
@endpoint({
    method: "GET",
    path: "/pending-counts",
    tags: ["Admin-Only"]
  })
  class GetPendingCounts {
    @request
    request() {}


    /** Response models */
    @response({ status: 200 })
    Response(@body body: ListPendingCountsSuccess) {}

    @response({ status: 400 })
    badRequestResponse(@body body: ListPendingCountsFail) {}
  }

interface ListPendingCountsSuccess {
  data: {
    users: {
      PLAYER?: Integer;
      COACH?: Integer;
      AGENT?: Integer;
      SCOUT?: Integer;
      OTHER?: Integer;
      total?: Integer;
  },
  skills: Integer,
  teams: Integer
  }
  message: string;
}
interface ListPendingCountsFail {
  message: string;
}