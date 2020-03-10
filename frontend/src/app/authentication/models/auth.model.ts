import { User } from './user.model';

export interface LoginRequest {
  email: string;
  password: string;
}

export interface TokenResponse {
  token: string;
}

export interface UserTokenResponse extends TokenResponse, User {}
