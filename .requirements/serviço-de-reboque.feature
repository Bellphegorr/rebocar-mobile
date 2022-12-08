Característica: Serviço de reboque

Para certificar que eu e meu veículo sejamos levados até o destino final
Como usuário
Quero que o sistema monitore o andamento do serviço

Cenário: Deslocamento do prestador de serviço ao local de atendimento

Dado que o prestador de serviço tenha aceitado o pedido de reboque
E o sistema tenha iniciado o monitoramento do Serviço
Quando o prestador de serviço iniciar o deslocamento
Então o sistema deve atualizar o status do serviço para "Em andamento, fase 1"

Cenário: Chegada do prestador de serviço ao local de atendimento

Dado que o prestador de serviço está no local de atendimento
Quando o prestador de serviço informar que chegou ao local de atendimento
Então o sistema deve atualizar o status do serviço para "Em andamento, fase 2"

Cenário: Reboque para o local de destino

Dado que o prestador de serviço tenha iniciado o reboque
Quando o prestador de serviço informar que o veículo foi aportado para o reboque
Então o sistema deve atualizar o status do serviço para "Em andamento, fase 3"

Cenário: Chegada do prestador de serviço ao local de destino

Dado que o prestador de serviço esteja no local de destino
Quando o prestador de serviço informar que chegou ao local de destino
Então o sistema deve atualizar o status do serviço para "Concluído"