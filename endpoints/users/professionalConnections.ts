import { endpoint, request, response, body, Integer, pathParams  } from "@airtasker/spot";
import {Player, Coach, Scout, Agent, Other} from "./types";
@endpoint({
    method: "GET",
    path: "/users/:id/professional-connections",
    tags: ["Users"]
  })
  class GetProfessionalConnectionsForSpecificUser {
    @request
    request( @pathParams pathParams: {
      id: Integer;
    }) {}
       
       @response({ status: 200 })
       Response(@body body: ProfessionalConnectionResponseSuccess) {}
   
       @response({ status: 400 })
       badRequestResponse(@body body: ProfessionalConnectionResponseFail) {}
  }
  
  
interface ProfessionalConnectionResponseSuccess {
    data:  Player[] | Coach[] | Agent | Other;
    message: string;
}


export interface ProfessionalConnectionResponseFail{
    message: string;
}