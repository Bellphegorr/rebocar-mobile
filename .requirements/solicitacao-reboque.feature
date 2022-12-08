Característica: Solicitação de reboque de veículo
Para que seja possível a chamada de um prestador de serviço
Como um usuário
Gostaria de solicitar um reboque de veículo

Cenário: Nova solicitação de reboque
Dado que sou um usuário logado
Quando solicito um reboque de veículo
E há veículos disponíveis na área de cobertura
Então o sistema deve solicitar a localização do veículo
E informar quando o reboque for aceito

Cenário: Não há veículos disponíveis
Dado que sou um usuário logado
Quando solicito um reboque de veículo
E não há veículos disponíveis na área de cobertura em um intervalo de 5 minutos
Então o sistema deve informar para tentar mais tarde

Cenário: Solicitação de reboque negada
Dado que sou um usuário logado
Quando solicito um reboque de veículo
E nenhum prestador de serviço aceita o pedio em um intervalo de 5 minutos
Então o sistema deve informar para tentar mais tarde