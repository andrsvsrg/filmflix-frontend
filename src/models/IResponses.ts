export interface ITokens {
  access: string;
  refresh: string;
}

export interface  IErrorResponse {
  error: string[];
  status: string;
}

export interface ILoginData {
  email:string,
  password:string
}