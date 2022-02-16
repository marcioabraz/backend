/**
 * Passos 
 * Verificar se campos são validos
 * fazer tratamento dos campos 
 * Verificar se email do usuário já existe
 * criptografar a senha
 * excluir o campo confirmpassword
 * gerar token de acesso
 * verificar se o usuário já existe
 * envia e-mail
 */

import { Encrypter } from "@helpers/Encrypter/types";
import { UserRepository } from "@repositories/User/types";
import { Customer, CustomerCreateDTO, Dependencies, ICreateCustomerUseCase, } from "./types";
export const ERROR_USER_NAME_INVALID = "Usuário precisa de ter um nome válido"
export const ERROR_USER_ALREADY_EXISTS = "Usuário já cadastrado"
export const ERROR_USER_PASSWORD_INVALID = "A senha e confirmação devem ser iguais"
export const TIME_IN_HOURS_TOKEN = 
class CreateCustomerUseCase implements ICreateCustomerUseCase {
    private readonly repository: UserRepository
    private readonly encrypter: Encrypter
    constructor(dependencies: Dependencies){
        this.repository = dependencies.repository
        this.encrypter = dependencies.encrypter
        this.tokenizator = dependencies.tokenizator
    }
    handle(userDTO: CustomerCreateDTO): Promise<Customer>{
        this.validate(userDTO)
        const userReturned = await this.repository.getBy({
            columnName:'email',
            columnValue: userDTO.email
        })
        if(userReturned){
            throw new Error(ERROR_USER_NAME_INVALID);
        }
        const userToCreate = userDTO
        userToCreate.password = this.encrypter.encrypt(userDTO.password)
        delete userToCreate.confirmPassword

        const userCreated = await this.repository.create(userToCreate)
        const token  = this.tokenizator.create(userToCreate, TIME_IN_HOURS_TOKEN)
        
    }
    
    private validate(userDTO: CustomerCreateDTO): boolean{
        if (userDTO.name ==undefined){
            throw new Error(ERROR_USER_NAME_INVALID);
        }
        if (userDTO.name.match(/\D/)){
            throw new Error(ERROR_USER_NAME_INVALID);
        }
        // if (userDTO.email) fazer depois
        if (userDTO.password != userDTO.confirmPassword){
            throw new Error(ERROR_USER_PASSWORD_INVALID);
        }
        return true;
    }
}

export CreateCustomerUseCase;