export interface IApiMethod {
    id: number;
    name: string;
    discription: string;
    storedProcedureName: string | null;
    pathUtl: string;
    httpMethod: string;
    isNotNullParam: boolean | null;
    isNeedAuntification: boolean | null;
    isDeleted: boolean;
}