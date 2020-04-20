import { asyncFactory } from "typescript-fsa-redux-thunk";
import actionCreatorFactory from "typescript-fsa";
import { BACK_URL } from "../../settings";
import { ILoginParams, ILoginResponse } from "../../api/dto/Auth";

const create = actionCreatorFactory("LOGIN");
const createAsync = asyncFactory(create);

export const changeTitle = create<string>("Change the title");

export const login = createAsync<ILoginParams, ILoginResponse, Error>(
  "LOGIN",
  async (params, dispatch) => {
    const url = `${BACK_URL}/api/Users/authenticate`;
    const options: RequestInit = {
      method: "POST",
      mode: "no-cors",
      cache: "no-cache",
      body: JSON.stringify(params),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Allow-Headers": "*",
      },
      // redirect: 'follow', // manual, *follow, error
      // referrer: 'no-referrer', // no-referrer, *client
    };
    const res = await fetch(url, options);
    console.log(res);
    if (!res.ok) {
      throw new Error(`Error ${res.status}: ${res.statusText}`);
    }

    dispatch(changeTitle("You are logged-in"));

    return res.json();
  }
);
