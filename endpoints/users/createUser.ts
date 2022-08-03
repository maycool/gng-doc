import { endpoint, request, response, body, Integer, headers, queryParams  } from "@airtasker/spot";

@endpoint({
  method: "POST",
  path: "/users"
})
class CreateUser {
  @request
  request(@body body: CreateUserRequest) {}

  @response({ status: 200 })
  successResponse(@body body: CreateUserSuccessResponse ) {}

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
