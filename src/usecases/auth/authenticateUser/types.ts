import { User } from "@entities/Users/types";
import { Encrypter } from "@helpers/Encrypter/types";
import { ICreateUserToken } from "@helpers/utils";
import { UserRepository } from "@repositories/User/types";

export interface CreateCustomerConstructor {
  new (dependencies: Dependencies): CreateCustomerUseCase;
}
type Dependencies = {
  repository: UserRepository;
  encrypter: Encrypter;
  createUserToken: ICreateUserToken;
};
export interface CreateCustomerUseCase {
  handle(userDTO: AuthDTO): Promise<UserAuthenticated>;
}

type AuthDTO = {
  email: User["email"];
  password: User["password"];
};

type UserAuthenticated = {
  name: User["name"];
  email: User["email"];
  id: User["id"];
  token: User["token"];
};
export type TokenParams = {
  exp: number;
  iat: number;
  sub: {
    id: User["id"];
  };
};
