import { endpoint, request, response, body, Integer   } from "@airtasker/spot";
import { BaseResponse } from "./Shared";
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
  gender: 'male' | 'female';
  nationality: string;
  countryOfResidence: string;
  cityOfResidence: string;
  role: 'player' | 'coach' | 'scout' | 'agent' | 'other';
  // aux fields --------------------------------
  height?: Integer;
  weight?: Integer;
  strongFoot?: 'left' | 'right' | 'both';
  primaryPosition?: string;
  otherPosition?: string;
  countriesCoachedIn?: Integer[];
  totalTeamsCoached?: Integer;
  preferredFormation?: string;
  locationOfScouting?: Integer[];
  typeOfScouting: string;
  areasCovered?: Integer[];
  totalCareerTransfers: Integer;
  // -------------------------------------------
  // form fields -------------------------------
  cardId?: string;
  cardValidUntil?: string;
  agencyName?: string;
  activeCountries?: Integer[];
  agencyRegisteredLocation?: string;
  officePhoneNumber?: string;
  agencyWebsite?: string;
  agencySocialMedia?: string;
  // -------------------------------------------
  skills?: Integer[];
  connections?: Integer[];
  experience?: Experience[];
  certificates?: Certificate[];
}

interface CreateUserSuccessResponse extends BaseResponse{}

interface CreateUserFailureResponse extends BaseResponse{}

interface Trophy {
  name: string;
  winningYear: string;
  mediaIds: Integer[];
}

interface Certificate {
  entity: string;
  name: string;
  issueDate: string;
  isExpirable: boolean;
  expirationDate?: string;
  credentialUrl: string;
}
interface Experience {
  clubId: Integer;
  isActive: boolean;
  playingLevel?: string;
  startDate: string;
  type?: string;
  endDate: string;
  playersScouted?: Integer;
  trophies?: Trophy[];
}