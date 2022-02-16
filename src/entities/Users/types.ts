export type User = {
  id: string;
  name: string;
  email: string;
  document: string;
  password: string;
  confirmPassword: string;
  isAdmin: boolean;
  isActive: boolean;
  hashForgottenPassword: string | null;
  activationToken: string | null;
  token: string;
};
export type UserDTO = {
  id: string;
  name: string;
  email: string;
  isAdmin: boolean;
  isActive: boolean;
};
