import { authorizedApi } from "../Hooks/withAxiosInterceptor";
import { UserResponse } from "../Models/Api/UserResponse";
import {userApi} from "../Hooks/useAxios";
import {SignInRequest} from "../Models/Api/SignInRequest";



export class UserApi {
  static getUser = async () =>
    await authorizedApi.get<UserResponse>("/user/getUser");

  static addUser = async (user : SignInRequest) =>
      await userApi.post("/user" + user)
}