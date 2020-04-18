import { IRole } from "./Role";

export interface IUser {
  id: number | null;
  firstName: string;
  lastName: string;
  userName: string;
  role: IRole;
}
