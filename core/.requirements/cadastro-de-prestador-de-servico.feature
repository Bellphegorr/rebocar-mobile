Característica: Cadastro de prestador de serviço

Para que eu possa prestar o serviço de reboque de automóveis
Como prestador de serviço
Quero me cadastrar no sistema

Cenário: Cadastro de prestador de serviço com sucesso

Dado que eu sou um prestador de serviço
Quando eu preencher os dados corretamente
E informar licença válida
E informar veículo apto para prestação do serviço
E enviar os dados
Então o sistema deve cadastrar-me como prestador de serviço

Cenário: Cadastro de prestador de serviço sem licença válida

Dado que eu sou um prestador de serviço
Quando eu preencher os dados corretamente
E informar licença inválida
Então o sistema não deve permitir meu cadastro
E deve me informar sobre a licença inválida

Cenário: Cadastro de prestador de serviço sem veículo apto

Dado que eu sou um prestador de serviço
Quando eu preencher os dados corretamente
E informar veículo inapto para prestação do serviço
Então o sistema deve cadastrar
Mas não deve permitir que eu preste serviço
E deve me informar sobre o veículo inapto