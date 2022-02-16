import { UserDTO } from "@entities/Users/types";

export interface ICreateUserToken {
  create(user: UserDTO, timeInHours?: number): string;
}
export const TIME_IN_HOURS_DEFAULT = 24;
