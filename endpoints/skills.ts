import { endpoint, request, response, body, Integer   } from "@airtasker/spot";

@endpoint({
    method: "POST",
    path: "/skills"
})
class CreateSkill {
    @request
    request(@body body: CreateSkillRequest) {}

    @response({ status: 200 })
    successResponse(@body body: CreateSkillSuccessResponse) {}

    @response({ status: 400 })
    badRequestResponse(@body body: CreateSkillFailureResponse) {}
}

interface CreateSkillRequest {
    nameAr: string;
    nameEn: string;
    role: 'PLAYER' | 'COACH' | 'SCOUT' | 'AGENT' | 'OTHER';
}

interface CreateSkillSuccessResponse{
    body: {
        message: string;
    };
}

interface CreateSkillFailureResponse{
    body: {
        message: string;
    };
}


@endpoint({
    method: "GET",
    path: "/skills?limit=10&offset=0&status=approved&role=player&name=football"
})
class ListSkill {
    @request
    request(@body body: ListSkillRequest) {}

    @response({ status: 200 })
    successResponse(@body body: ListSkillSuccessResponse) {}

    @response({ status: 400 })
    badRequestResponse(@body body: ListSkillFailureResponse) {}
}

interface ListSkillRequest {
    id: number;
    role: 'PLAYER' | 'COACH' | 'SCOUT' | 'AGENT' | 'OTHER';
    status: 'APPROVED' | 'PENDING';
    name:string;
    lang: 'EN' | 'AR'
}


interface ListSkillSuccessResponse{
    body: {
        message: string;
    };
}

interface ListSkillFailureResponse{
    body: {
        message: string;
    };
}


@endpoint({
    method: "PATCH",
    path: "/skills/{id}"
})
class EditSkill {
    @request
    request(@body body: EditSkillRequest) {}

    @response({ status: 200 })
    successResponse(@body body: EditSkillSuccessResponse) {}

    @response({ status: 400 })
    badRequestResponse(@body body: EditSkillFailureResponse) {}
}

interface EditSkillRequest {
    nameAr: string;
    nameEn: string;
    role: 'PLAYER' | 'COACH' | 'SCOUT' | 'AGENT' | 'OTHER';
    status: 'PENDING' | 'APPROVED'
}

interface EditSkillSuccessResponse{
    body: {
        message: string;
    };
}

interface EditSkillFailureResponse{
    body: {
        message: string;
    };
}



@endpoint({
    method: "DELETE",
    path: "/skills/{id}"
})
class DeleteSkill {

    @response({ status: 200 })
    successResponse(@body body: DeleteSkillSuccessResponse) {}

    @response({ status: 400 })
    badRequestResponse(@body body: DeleteSkillFailureResponse) {}
}

interface DeleteSkillSuccessResponse{
    body: {
        message: string;
    };
}

interface DeleteSkillFailureResponse{
    body: {
        message: string;
    };
}
