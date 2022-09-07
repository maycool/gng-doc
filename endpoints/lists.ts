import { endpoint, request, response, body, headers, queryParams, Integer, pathParams } from "@airtasker/spot";

@endpoint({
    method: "GET",
    path: "/lists",
    tags: ["Lists"]
})
class GetLists {
    @request
    request() {}

    @response({ status: 201 })
    response(@body body: ListsSuccessResponse) {}

    @response({ status: 400 })
    badRequestResponse(@body body: ListsFailResponse) {}
}

interface ListsSuccessResponse {
    /**playingLevel, coachType, scoutType, formation, trophyNamePlayer, trophyNameCoach, experiencePositionOther, experienceEmploymentTypeOther */
 data: { listName: EnumLists }
}
interface EnumEntries {
    entryId: Integer,
    name: string,
    lang: string
}
interface EnumLists {
    entries: EnumEntries[]
}
interface ListsFailResponse {
message: string;
}
