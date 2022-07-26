import { endpoint, request, response, body, Integer   } from "@airtasker/spot";

@endpoint({
  method: "POST",
  path: "/user"
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
  birthDate: string;
  gender: 'MALE' | 'FEMALE';
  nationality: string;
  number: string;
  mediaUrl: string;
  email: string;
  countryId: number;
  city: string;
  role: 'PLAYER' | 'COACH' | 'SCOUT' | 'AGENT' | 'OTHER';
  // aux fields --------------------------------
  height?: Integer;
  weight?: Integer;
  strongFoot?: 'LEFT' | 'RIGHT' | 'BOTH';
  primaryPosition?: string;
  otherPosition?: string;
  agentId?: number;
  parentId?: number;
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
  agencyClubId?: number;
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
  body: {
    message: string;
  };
}

interface CreateUserFailureResponse{
  body: {
    message: string;
  };
}

interface Skill {
  old: Integer[];
  new: {name: string}[];
}
interface Trophy {
  title: string;
  winningYear: string;
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
  clubId: Integer;
  isCurrentlyThere: boolean;
  playingLevel: string;
  startDate: string;
  type?: string;
  endDate?: string;
  playersScouted?: Integer;
  position?: string;
  trophies?: Trophy[];
}