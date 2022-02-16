import { User } from "@entities/Users/types";
import { MailSender } from "@helpers/MailSender/types";
import { Tokenizator } from "@helpers/Tokenizator/types";
import { UserRepository } from "@repositories/User/types";

export interface ForgotPasswordConstructor {
  new (dependencies: Dependencies): ForgotPasswordUseCase;
}
type Dependencies = {
  repository: UserRepository;
  tokenizator: Tokenizator;
  mailSender: MailSender;
};
export interface ForgotPasswordUseCase {
  handle(ForgotPasswordDTO: ForgotPasswordDTO): Promise<void>;
}

type ForgotPasswordDTO = {
  email: User["email"];
};
