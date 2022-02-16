Funcionalidade: Create new Customer
              Nossos clientes precisam de ser cadastrados na plataforma

        Cenario: Clientes não cadastrados devem ter opção de acesso
            Dado que sou um novo cliente
             Quando acesso o site
             Então devo ter opção de cadastro para acessar páginas restritas
  
        Cenário: Clientes devem ter opção de ser cadastrados
            Dado que sou um novo cliente
              E desejo cadastrar na plataforma para visualizar conteúdo restrito
             Quando for realizar o cadastro
             Então deve ser solicitado as seguintes informações "<name>", "<email>", "<password>"

        Exemplos:
                  | name          | email             | password    |
                  | Fulano de tal | fulano@email.com  | S&@#$!asd   |
                  | Ciclano       | ciclano@email.com | @#$@!asd34r |

        Cenário: Clientes devem ter sua senha criptografad por segurança
            Dado que sou um cliente cadastrado
              E acesar conteúdo restrito
          Q