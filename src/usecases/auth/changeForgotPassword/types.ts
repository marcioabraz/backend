import { User } from "@entities/Users/types";
import { MailSender } from "@helpers/MailSender/types";
import { UserRepository } from "@repositories/User/types";

export interface ChangeForgotPasswordConstructor {
  new (dependencies: Dependencies): ChangeForgotPasswordUseCase;
}
type Dependencies = {
  repository: UserRepository;
  mailSender: MailSender;
};
export interface ChangeForgotPasswordUseCase {
  handle(
    changeForgotPasswordDTO: ChangeForgotPasswordDTO,
    hashForgottenPassword: string,
  ): Promise<void>;
}

type ChangeForgotPasswordDTO = {
  password: User["password"];
  confirmPassword: User["confirmPassword"];
};
