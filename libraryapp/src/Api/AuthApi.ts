import axios from "axios";
import { SignInRequest } from "../Models/Api/SignInRequest";
import { SignInResponse } from "../Models/Api/SignInResponse";
import { SignUpRequest } from "../Models/Api/SignUpRequest";
import { SignUpResponse} from "../Models/Api/SignUpResponse";



export class AuthApi {

  
  
  static signin = async (request: SignInRequest) =>
    await axios.post<SignInResponse>("/auth/signin", request);
  
   
  static signup = async (request: SignUpRequest) =>
  await axios.post<SignUpResponse>("/auth/signup", request);




}