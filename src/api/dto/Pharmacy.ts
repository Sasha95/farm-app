import { IRegion } from "./Region";

export interface IPharmacy {
    id: number;
    name: string;
    region: IRegion;
    isMode: boolean;
    isType: boolean;
    isNetwork: boolean;
    isDeleted: boolean;
}