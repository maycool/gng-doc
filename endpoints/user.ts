import { endpoint, request, response, body, Integer, headers, queryParams  } from "@airtasker/spot";

/** The list returns all user statuses even rejected */
@endpoint({
  method: "GET",
  path: "/users/network",
})
class GetUserNetwork {
  @request
  request(@queryParams queryParams: ListNetwork) {}

  @response({ status: 200 })
  successResponse(@body body: GetUserSuccessResponse) {}

  @response({ status: 400 })
  badRequestResponse(@body body: GetUserFailureResponse) {}
}
interface ListNetwork {
  role?: 'PLAYER' | 'COACH' | 'SCOUT' | 'OTHER' | 'AGENT';
  name?: string;
  limit: Integer;
  offset: Integer;
}





@endpoint({
  method: "GET",
  path: "/users",
})
class GetUser {
  @request
  request(@queryParams queryParams: ListUsersParams) {}

  @response({ status: 200 })
  successResponse(@body body: GetUserSuccessResponse) {}

  @response({ status: 400 })
  badRequestResponse(@body body: GetUserFailureResponse) {}
}

interface ListUsersParams {
  role?: 'PLAYER' | 'COACH' | 'SCOUT' | 'OTHER' | 'AGENT';
  name?: string;
  /** If set to true returns only verified users, if set to false returns unverified, verified, pending users and discards rejected */
  isVerified?: boolean;
  limit: Integer;
  offset: Integer;
}
interface UserData {
  id: Integer;
  firstName: string;
  lastName: string;
  bio?: string;
  gender: 'MALE' | 'FEMALE',
  city: string;
  role: 'PLAYER' | 'COACH' | 'SCOUT' | 'AGENT' | 'OTHER';
  status?: string;
  nationality: string;
  /** The additional properties differs from role to another
   * For example this is for the player role
   */
  height?: Integer,
  weight?: Integer,
  strongFoot?: string,
  otherPosition?: string,
  /** End of additional properties */
  primaryPosition?: string,
  media: { id?: Integer, url?: string }
  team: { id?: Integer, name?: string }
  country: { id: Integer, url: string, name: string }
  parent: { id: Integer, firstName: string, lastName: string, status: string, url: string }
  agent: { id: Integer, firstName: string, lastName: string, status: string, url: string }

}
interface GetUserSuccessResponse{
    data: UserData[];
    message: string;

}

interface GetUserFailureResponse{
    message: string;
}

@endpoint({
  method: "POST",
  path: "/users"
})
class CreateUser {
  @request
  request(@body body: CreateUserRequest) {}

  @response({ status: 200 })
  successResponse(@body body: CreateUserSuccessResponse) {}

  @response({ status: 400 })
  badRequestResponse(@body body: CreateUserFailureResponse) {}
}

interface CreateUserRequest {
  firstName: string;
  lastName: string;
  /** FORMAT MMMM DD, YYYY */
  birthDate: string;
  gender: 'MALE' | 'FEMALE';
  nationalityId: number;
   /** Regex accepts a '+' then a series of digits of min length 6 and max length 20 */
  number: string;
  mediaUrl: string;
  email: string;
  countryId: number;
  city: string;
  role: 'PLAYER' | 'COACH' | 'SCOUT' | 'AGENT' | 'OTHER';
  agentId?: number;
  parentId?: number;
  // aux fields --------------------------------
  height?: Integer;
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
  // -------------------------------------------
  // form fields -------------------------------
  cardNumber?: string;
  cardMediaUrl?: string;
  cardValidTo?: string;
  agencyName?: string;
  activeCountries?: Integer[];
  agencyRegisteredLocation?: string;
  officePhoneNumber?: string;
  agencyTeamId?: number;
  agencyWebsite?: string;
  agencySocialMedia?: string;
  // -------------------------------------------
  skills?: Skill;
  connections?: Integer[];
  experience?: Experience[];
  certificates?: Certificate[];


  scoutedPlayersIds?: Integer[];
  agentPlayerIds?: Integer[];
}

interface CreateUserSuccessResponse{
    message: string;
}

interface CreateUserFailureResponse{
    message: string;
}

interface Skill {
  old: Integer[];
  new: {name: string}[];
}
interface Trophy {
  title: string;
  winningDate: string;
  mediaUrls?: {url: string, type: 'IMAGE' | 'VIDEO'}[];
}

interface Certificate {
  entity: string;
  title: string;
  issueDate: string;
  isExpirable: boolean;
  expiryDate?: string;
  url: string;
}
interface Experience {
  teamId: Integer;
  isCurrentlyThere: boolean;
  playingLevel?: string;
  startDate: string;
  type?: string;
  endDate?: string;
  playersScouted?: Integer;
  matches: Integer;
  goals: Integer;
  position?: string;
  trophies?: Trophy[];
}
