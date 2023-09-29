# FN Queue Producer

Função que recebe o payload via RestAPI e envia direto para o OCI Queue.

## Sobre a Função

Função criada em Python que é acionada pelo OCI API Gateway, a function utiliza o Container image OracleLinux:8-slim para ter um ligeiro ganho de performance em relação ao paradro do Fn Project.

## Como utilizar

1. Substituo os valores das variáveis de contexto **queueOCID** e **queueEndpoint** no arquivo [func.yaml](/func.yaml).

2. Utilize o fncli para fazer o deploy da função no seu ambiente.
 ```
 fn deploy --app <app-name> -v
 ```
Substituindo **app-name** pelo nome da aplicação de Functions criado.

3. Adicione a função a seu deployment do API Gateway.

## Stress Teste

Você pode utilizar o Stress Teste através do K6. [Aqui](https://k6.io/docs/get-started/installation/) você encontra como instalar o K6.

Pode utilizar [esse](/k6/stress.js) exemplo para executar o teste.

Esse Script contém um stress teste que aumenta a carga progressivamente até 800 interações por segundo e cria um máximo de 2000 virtual users.

1. Substitua o <Endpoint> no arquivo [stress.js](/k6/stress.js)
   
2. Execute o stress teste com o comando abaixo:

```
k6 run stress.js
```