import {
  endpoint,
  request,
  response,
  body,
  headers,
  queryParams,
  Integer,
} from "@airtasker/spot";
import { Player, Agent, Coach, Scout, Other } from "./types";
@endpoint({
  method: "POST",
  path: "/users/{toId}/requests/",
  tags: ["Requests"],
})
class CreateRequest {
  @request
  request(
    @headers headers: CreateRequestHeaders,
    @body body: CreateRequestBody
  ) {}

  @response({ status: 200 })
  successResponse(@body body: CreateRequestSuccessResponse) {}

  @response({ status: 400 })
  badRequestResponse(@body body: CreateRequestFailureResponse) {}
}

interface CreateRequestHeaders {
  "Accept-Language": string;
}

interface CreateRequestBody {
  type: "FRIEND" | "AGENT" | "PARENT" | "SCOUT";
}

interface CreateRequestSuccessResponse {
  data: {
    id: number;
  };
  message: string;
}

interface CreateRequestFailureResponse {
  message: string;
}

@endpoint({
  method: "GET",
  path: "/users/{id}/requests/",
  tags: ["Requests"],
})
class getPendingRequests {
  @request
  request(
    @headers headers: GetRequestHeaders,
    @queryParams queryParams: GetRequrestParam
  ) {}

  @response({ status: 200 })
  successResponse(@body body: GetRequestSuccessResponse) {}

  @response({ status: 400 })
  badRequestResponse(@body body: GetRequestFailureResponse) {}
}

interface GetRequestHeaders {
  "Accept-Language": string;
}

interface GetRequrestParam {
  offset?: Integer;
  limit?: Integer;
  relationType?: "FRIEND" | "PROFESSIONAL";
  requestType?: "SENT" | "RECEIVED";
}

interface GetRequestSuccessResponse {
  data: DataContent;
  message: string;
}

interface GetRequestFailureResponse {
  message: string;
}

interface PlayerRequests extends Player {
  userRequestId: Integer;
  requestType: "FRIEND" | "AGENT" | "SCOUT" | "PARENT";
}
interface AgentRequests extends Player {
  userRequestId: Integer;
  requestType: "FRIEND" | "AGENT";
}
interface CoachRequests extends Player {
  userRequestId: Integer;
  requestType: "FRIEND" | "AGENT";
}
interface ScoutRequests extends Player {
  userRequestId: Integer;
  requestType: "FRIEND" | "SCOUT";
}
interface OtherRequests extends Player {
  userRequestId: Integer;
  requestType: "FRIEND" | "PARENT";
}
interface DataContent {
  sent: {
    PROFESSIONAL:
      | PlayerRequests
      | AgentRequests[]
      | CoachRequests[]
      | ScoutRequests[]
      | OtherRequests[];
    FRIEND:
      | PlayerRequests
      | AgentRequests[]
      | CoachRequests[]
      | ScoutRequests[]
      | OtherRequests[];
  };
  received: {
    PROFESSIONAL:
      | PlayerRequests
      | AgentRequests[]
      | CoachRequests[]
      | ScoutRequests[]
      | OtherRequests[];
    FRIEND:
      | PlayerRequests
      | AgentRequests[]
      | CoachRequests[]
      | ScoutRequests[]
      | OtherRequests[];
  };
}

interface DataObject {
  id?: Integer;
  name?: string;
}

@endpoint({
  method: "PATCH",
  path: "/request/{id}/accept",
  tags: ["Requests"],
})
class AcceptRequest {
  @request
  request(@headers headers: AcceptRequestHeaders) {}

  @response({ status: 200 })
  successResponse(@body body: AcceptRequestSuccessResponse) {}

  @response({ status: 400 })
  badRequestResponse(@body body: AcceptRequestFailureResponse) {}
}

interface AcceptRequestHeaders {
  "Accept-Language": string;
}

interface AcceptRequestSuccessResponse {
  message: string;
}

interface AcceptRequestFailureResponse {
  message: string;
}

@endpoint({
  method: "PATCH",
  path: "/request/{id}/decline",
  tags: ["Requests"],
})
class DeclineRequest {
  @request
  request(@headers headers: DeclineRequestHeaders) {}

  @response({ status: 200 })
  successResponse(@body body: DeclineRequestSuccessResponse) {}

  @response({ status: 400 })
  badRequestResponse(@body body: DeclineRequestFailureResponse) {}
}

interface DeclineRequestHeaders {
  "Accept-Language": string;
}

interface DeclineRequestSuccessResponse {
  message: string;
}

interface DeclineRequestFailureResponse {
  message: string;
}

@endpoint({
  method: "PATCH",
  path: "/request/{id}/cancel",
  tags: ["Requests"],
})
class CancelRequest {
  @request
  request(@headers headers: CancelRequestHeaders) {}

  @response({ status: 200 })
  successResponse(@body body: CancelRequestSuccessResponse) {}

  @response({ status: 400 })
  badRequestResponse(@body body: CancelRequestFailureResponse) {}
}

interface CancelRequestHeaders {
  "Accept-Language": string;
}

interface CancelRequestSuccessResponse {
  message: string;
}

interface CancelRequestFailureResponse {
  message: string;
}

@endpoint({
  method: "PATCH",
  path: "/requests/{friendId}/unfriend",
  tags: ["Requests"],
})
class UnFriendRequest {
  @request
  request(@headers headers: UnFriendRequestHeaders) {}

  @response({ status: 200 })
  successResponse(@body body: UnFriendRequestSuccessResponse) {}

  @response({ status: 400 })
  badRequestResponse(@body body: UnFriendRequestFailureResponse) {}
}

interface UnFriendRequestHeaders {
  "Accept-Language": string;
}

interface UnFriendRequestSuccessResponse {
  message: string;
}

interface UnFriendRequestFailureResponse {
  message: string;
}
