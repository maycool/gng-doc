import { endpoint, request, response, body, Integer, headers, queryParams, pathParams  } from "@airtasker/spot";
@endpoint({
    method: "PATCH",
    path: "/users/:id",
    tags: ["Users"]
  })
  class PatchUsers {
    @request
    request(@body body: PatchUserRequest, @pathParams pathParams: {
        id: number;
      }) {}
  
       /** Response models */
       @response({ status: 200 })
       ScoutResponse(@body body: ResponsePatch) {}
   
       @response({ status: 400 })
       badRequestResponse(@body body: ResponsePatch) {}
  }
  interface ResponsePatch {
    message: string;
  }
interface PatchUserRequest {
  firstName?: string;
    lastName?: string;
    bio?: string;
    nationalityId?: Integer;
    gender?: 'MALE' | 'FEMALE';
    city?: string;
    countryId?: Integer;
    number?: string;
    email?: string;
    mediaUrl?: string;
    birthdate?: string;
    height?: Integer;
    role: 'PLAYER' | 'COACH' | 'SCOUT' | 'AGENT' | 'OTHER';
    weight?: Integer;
    strongFoot?: 'LEFT' | 'RIGHT' | 'BOTH';
    primaryPosition?: 'Goalkeeper (GK)' | 'Left Back (LB)' | 'Center Back (CB)' | 'Sweeper (SW)' | 'Right Back (RB)' | 'Left Midfielder (LMF)' | 'Center Midfielder (CMF)' |
    'Right Midfielder (RMF)' | 'Attacking Midfielder (AMF)' | 'Defensive Midfielder (DMF)' | 'Left Winger (LW)' | 'Center Forward (CW)' | 'Right Winger (RW)' | 'Striker (ST)'
     otherPosition?: 'Goalkeeper (GK)' | 'Left Back (LB)' | 'Center Back (CB)' | 'Sweeper (SW)' | 'Right Back (RB)' | 'Left Midfielder (LMF)' | 'Center Midfielder (CMF)' |
     'Right Midfielder (RMF)' | 'Attacking Midfielder (AMF)' | 'Defensive Midfielder (DMF)' | 'Left Winger (LW)' | 'Center Forward (CW)' | 'Right Winger (RW)' | 'Striker (ST)';
     countriesCoachedIn?: Integer[];
     totalTeamsCoached?: Integer;
     preferredFormation?: string;
     locationOfScouting?: Integer[];
     typeOfScouting?: string;
     areasCovered?: Integer[];
     totalCareerTransfers?: Integer;
}
