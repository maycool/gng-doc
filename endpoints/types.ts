import { Integer } from "@airtasker/spot";

// USER RESPONSE MODELS ==================================================================
export interface Media {
  id: Integer;
  url: string;
}

export interface Team {
  id?: Integer;
  name?: string;
}

export interface Country {
  id: Integer;
  url: string;
  name: string;
}

export interface CountriesWorkedIn {
  id: Integer;
  name: string;
  latitude: number;
  longitude: number;
}

export interface Coach {
  id: Integer;
  firstName: string;
  lastName: string;
  birthdate: string;
  bio?: string;
  gender: string;
  city: string;
  role: string;
  verificationStatus: string;
  nationality: string;
  preferredFormation?: string;
  totalTeamsCoached?: Integer;
  media?: Media;
  team?: Team;
  relationshipStatus: "FRIEND" | "REQUESTED" | "PENDING" | null;
  countriesWorkedIn?: CountriesWorkedIn[];
  country: Country;
}

export interface Scout {
  id: Integer;
  firstName: string;
  lastName: string;
  birthdate: string;
  bio?: string;
  gender: string;
  city: string;
  role: string;
  verificationStatus: string;
  nationality: string;
  typeOfScouting?: string;
  team?: Team;
  media?: Media;
  relationshipStatus: "FRIEND" | "REQUESTED" | "PENDING" | null;
  countriesWorkedIn?: CountriesWorkedIn[];
  country: Country;
}

export interface Agent {
  id: Integer;
  firstName: string;
  lastName: string;
  birthdate: string;
  bio?: string;
  gender: string;
  city: string;
  role: string;
  verificationStatus: string;
  nationality: string;
  totalCareerTransfers?: Integer;
  media?: Media;
  relationshipStatus: "FRIEND" | "REQUESTED" | "PENDING" | null;
  countriesWorkedIn?: CountriesWorkedIn[];
  country: Country;
}

export interface Other {
  id: Integer;
  firstName: string;
  lastName: string;
  birthdate: string;
  bio?: string;
  gender: string;
  city: string;
  role: string;
  verificationStatus: string;
  nationality: string;
  relationshipStatus: "FRIEND" | "REQUESTED" | "PENDING" | null;
  media?: Media;
  team?: Team;
  country: Country;
}

export interface Player {
  id: Integer;
  firstName: string;
  lastName: string;
  birthdate: string;
  bio?: string;
  gender: string;
  city: string;
  role: string;
  verificationStatus: string;
  nationality: string;
  height?: string;
  weight?: string;
  strongFoot?: string;
  otherPosition?: string;
  primaryPosition?: string;
  relationshipStatus: "FRIEND" | "REQUESTED" | "PENDING" | null;
  media?: Media;
  team?: Team;
  parent?: Other;
  country: Country;
}

export interface PlayerAdmin extends Player {
  email: string;
  number: string;
}

export interface CoachAdmin extends Coach {
  email: string;
  number: string;
}

export interface ScoutAdmin extends Scout {
  email: string;
  number: string;
}

export interface AgentAdmin extends Agent {
  email: string;
  number: string;
}

export interface OtherAdmin extends Other {
  email: string;
  number: string;
}

export interface UserVerificationForm {
  id: Integer;
  cardNumber: string;
  cardValidTo: string;
  agencyName?: string;
  officeNumber?: string;
  registeredLocation?: string;
  socialMedia?: string;
  website?: string;
  media: { id: Integer; url: string };
  countries?: { id: Integer; name: string }[];
  team?: { id: Integer; name: string };
}

export interface UserExperiences {
  id: Integer;
  isCurrentlyThere: boolean;
  startDate: string;
  endDate?: string;
  matches?: Integer;
  goals?: Integer;
  type?: string;
  position?: string;
  playingLevel?: string;
  playerScouted?: Integer;
  team: {
    id: Integer;
    name: string;
    type: string;
    status: string;
    media: { id: Integer; url: string };
  };
}

// USER RESPONSE MODELS ==================================================================

// USER REQUESTS ==================================================================
export interface CreateUserRequest {
  firstName: string;
  lastName: string;
  /** FORMAT MMMM DD, YYYY */
  birthdate: string;
  gender: "MALE" | "FEMALE";
  nationalityId: Integer;
  /** Regex accepts a '+' then a series of digits of min length 6 and max length 20 */
  number: string;
  mediaUrl: string;
  email: string;
  countryId: Integer;
  city: string;
  role: "PLAYER" | "COACH" | "SCOUT" | "AGENT" | "OTHER";
  agentId?: Integer;
  parentId?: Integer;
  // aux fields --------------------------------
  height?: Integer;
  weight?: Integer;
  strongFoot?: "LEFT" | "RIGHT" | "BOTH";
  primaryPosition?:
    | "Goalkeeper (GK)"
    | "Left Back (LB)"
    | "Center Back (CB)"
    | "Sweeper (SW)"
    | "Right Back (RB)"
    | "Left Midfielder (LMF)"
    | "Center Midfielder (CMF)"
    | "Right Midfielder (RMF)"
    | "Attacking Midfielder (AMF)"
    | "Defensive Midfielder (DMF)"
    | "Left Winger (LW)"
    | "Center Forward (CW)"
    | "Right Winger (RW)"
    | "Striker (ST)";
  otherPosition?:
    | "Goalkeeper (GK)"
    | "Left Back (LB)"
    | "Center Back (CB)"
    | "Sweeper (SW)"
    | "Right Back (RB)"
    | "Left Midfielder (LMF)"
    | "Center Midfielder (CMF)"
    | "Right Midfielder (RMF)"
    | "Attacking Midfielder (AMF)"
    | "Defensive Midfielder (DMF)"
    | "Left Winger (LW)"
    | "Center Forward (CF)"
    | "Right Winger (RW)"
    | "Striker (ST)";
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
  skills?: CreateUserRequestSkills;
  connections?: Integer[];
  experiences?: CreateUserRequestExperience[];
  certificates?: CreateUserRequestCertificate[];

  scoutedPlayersIds?: Integer[];
  agentPlayerIds?: Integer[];
}

export interface CreateUserRequestSkills {
  old: Integer[];
  new: { name: string }[];
}

export interface CreateUserRequestTrophies {
  title: string;
  winningDate: string;
  mediaUrls?: { url: string; type: "IMAGE" | "VIDEO" }[];
}

export interface CreateUserRequestCertificate {
  entity: string;
  title: string;
  issueDate: string;
  isExpirable: boolean;
  expiryDate?: string;
  url: string;
}

export interface CreateUserRequestExperience {
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
  trophies?: CreateUserRequestTrophies[];
}

export interface GetUsersRequest {
  role?: "PLAYER" | "COACH" | "SCOUT" | "OTHER" | "AGENT";
  name?: string;
  /** If set to true returns only verified users, if set to false returns unverified, verified, pending users and discards rejected */
  isVerified?: boolean;
  /** A flag to get the rejected users with the returned set */
  getRejected?: boolean;
  /** Admin only */
  email?: string;
  /** Admin only */
  number?: string;
  limit: Integer;
  offset: Integer;
}

export interface GetUserNetworkRequest {
  role?: "PLAYER" | "COACH" | "SCOUT" | "OTHER" | "AGENT";
  name?: string;
  limit: Integer;
  offset: Integer;
}

export interface PatchUserRequest {
  firstName?: string;
  lastName?: string;
  bio?: string;
  nationalityId?: Integer;
  gender?: "MALE" | "FEMALE";
  city?: string;
  countryId?: Integer;
  number?: string;
  email?: string;
  mediaUrl?: string;
  birthdate?: string;
  height?: Integer;
  role: "PLAYER" | "COACH" | "SCOUT" | "AGENT" | "OTHER";
  weight?: Integer;
  strongFoot?: "LEFT" | "RIGHT" | "BOTH";
  primaryPosition?:
    | "Goalkeeper (GK)"
    | "Left Back (LB)"
    | "Center Back (CB)"
    | "Sweeper (SW)"
    | "Right Back (RB)"
    | "Left Midfielder (LMF)"
    | "Center Midfielder (CMF)"
    | "Right Midfielder (RMF)"
    | "Attacking Midfielder (AMF)"
    | "Defensive Midfielder (DMF)"
    | "Left Winger (LW)"
    | "Center Forward (CW)"
    | "Right Winger (RW)"
    | "Striker (ST)";
  otherPosition?:
    | "Goalkeeper (GK)"
    | "Left Back (LB)"
    | "Center Back (CB)"
    | "Sweeper (SW)"
    | "Right Back (RB)"
    | "Left Midfielder (LMF)"
    | "Center Midfielder (CMF)"
    | "Right Midfielder (RMF)"
    | "Attacking Midfielder (AMF)"
    | "Defensive Midfielder (DMF)"
    | "Left Winger (LW)"
    | "Center Forward (CW)"
    | "Right Winger (RW)"
    | "Striker (ST)";
  preferredFormation?: string;
  countriesCoachedIn?: Integer[];
  totalTeamsCoached?: Integer;
  typeOfScouting?: string;
  totalCareerTransfers?: Integer;
}

// USER REQUESTS ==================================================================

// TEAMS RESPONSE MODELS ==================================================================
export interface TeamsAdminResponseObject {
  id: number;
  type: "NATIONAL" | "CLUB";
  status: "PENDING" | "APPROVED";
  names: { id: Integer; name: string; lang: string }[];
  country: {
    id: Integer;
    name: string;
  };
  media: {
    id: Integer;
    url: string;
  };
}

export interface TeamsMobileResponseObject {
  id: number;
  name: string;
  type: "NATIONAL" | "CLUB";
  status: "PENDING" | "APPROVED";
  lang: string;
  country: {
    id: Integer;
    name: string;
  };
  media: {
    id: Integer;
    url: string;
  };
}
// TEAMS RESPONSE MODELS ==================================================================

// TEAMS REQUESTS ==================================================================
export interface CreateTeamsRequest {
  names: { name: string; lang: "EN" | "AR" | "FR" }[];
  type?: "NATIONAL" | "CLUB";
  status?: "PENDING" | "APPROVED";
  mediaUrl?: string;
  countryId: Integer;
}

export interface PatchTeamRequest {
  type?: "NATIONAL" | "CLUB";
  countryId?: Integer;
  mediaUrl?: string;
  status?: "PENDING" | "APPROVED";
  names?: { id?: Integer; name: string; lang: string }[];
}
// TEAMS REQUESTS ==================================================================

// SKILLS RESPONSE MODELS ==================================================================
export interface SkillAdminResponseObject {
  /** Skill ID */
  id: Integer;
  role: "PLAYER" | "COACH" | "SCOUT" | "AGENT" | "OTHER";
  status: "APPROVED" | "PENDING";
  names: {
    /** Localized Skill ID */
    id: Integer;
    name: string;
    lang: "AR" | "EN";
  };
}
// TODO NEEDS CHECKING
// export interface SkillMobileResponseObject {
//   /** Skill ID */
//   id: Integer;
//   role: "PLAYER" | "COACH" | "SCOUT" | "AGENT" | "OTHER";
//   status: "APPROVED" | "PENDING";
//   name: string;
// }

// SKILLS RESPONSE MODELS ==================================================================

// SKILLS REQUESTS ==================================================================
export interface CreateSkillRequest {
  nameAr: string;
  nameEn: string;
  role: "PLAYER" | "COACH" | "SCOUT" | "AGENT" | "OTHER";
}
// SKILLS REQUESTS ==================================================================
