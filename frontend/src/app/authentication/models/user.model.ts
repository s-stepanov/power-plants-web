export interface UserDto {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}
