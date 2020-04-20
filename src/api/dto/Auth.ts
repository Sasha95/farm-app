import { IUser } from "./User";

export interface ILoginParams {
  login: string;
  password: string;
}

export interface ILoginResponse extends IUser {
  token: string;
}
