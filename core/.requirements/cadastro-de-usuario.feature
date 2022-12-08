Característica: Cadastro de usuário na plataforma

Para utilização dos serviços do aplicativo
Eu como usuário
Quero me cadastrar na plataforma

Cenário: Cadastro de usuário na plataforma

Dado que eu esteja no formulário de cadastro
Quando eu preencher os campos de cadastro
E os dados do veículo
E comprove a maior idade
E aceite os termos de uso
E envie os dados
Então o sistema deve cadastrar o usuário

Cenário: Cadastro de usuário sem veículo

Dado que eu esteja no formulário de cadastro
Quando eu preencher os campos de cadastro
E envie os dados
Então o sistema deve me cadastra como novo usuário
Mas não deve permitir que eu utilize os serviços

Cenário: Eu tento me cadastrar porém sou menor de idade

Dado que eu esteja no formulário de cadastro
Quando eu preencher os campos de cadastro
Mas não comprovar a maior idade
Então o sistema deve me impedir de me cadastrar