export interface Tokens {
  access: string;
  refresh: string;
}

export interface RegisterResponse {
  data?: {
    access: string;
    refresh: string;
  },
  error?: {
    error:string;
    status:string;
  }
}