import { reducerWithInitialState } from "typescript-fsa-reducers";
import { login, changeTitle } from "./AuthActions";
import { ILoginResponse } from "../../api/dto/Auth";

interface State {
  title: string;
  loadState?: boolean;
  user: ILoginResponse;
  error?: Error | null;
}

const initial: State = {
  title: "Please login",
  user: {
    id: 0,
    firstName: "",
    lastName: "",
    userName: "",
    token: "",
    role: {
      id: 0,
      name: "Unauthorize",
      isDeleted: false,
    },
  },
};

export const authReducer = reducerWithInitialState(initial)
  .case(changeTitle, (state, title) => ({
    ...state,
    title,
  }))
  .case(login.async.started, (state) => ({
    ...state,
    loadState: true,
    error: undefined,
  }))
  .case(login.async.done, (state, { result }) => ({
    ...state,
    user: result,
    loadState: false,
    error: undefined,
  }))
  .case(login.async.failed, (state, { error }) => ({
    ...state,
    loadState: false,
    error,
  }));
