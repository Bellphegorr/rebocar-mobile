Característica: Cancelamento do pedido de reboque

Para que eu possa cancelar o pedido devido algum mal entendido ou emprevisto
Eu como Consumidor
Quero que o sistema permita o cancelamento do serviço

Cenário: Cancelamento do pedido pelo usuário

Dado que sou um usuário
E um serviço foi iniciado
Quando eu solicito o cancelamento do pedido
Então o sistema deve cancelar o pedido

Cenário: Cancelamento do pedido pelo prestador

Dado que sou um prestador
E um serviço foi iniciado
Quando eu solicito o cancelamento do pedido
Então o sistema deve cancelar o pedido

#Cenários de cancelamento após 5 minutos