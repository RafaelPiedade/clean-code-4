
Etidades resonsavel por modelar regras de negócios
é um conjunto de regras de negócios independentes _pode ser um objeto com métodos ou até mesmo um conjunto de funções_
Regras de negócios independentes
- CPF é valido?
- Qual o valor total do pedido
- quanto de desconto deve ser aplicado..

São considereados *compoentes de alto nivel de abstração* e _por serem estáveis mudam com menos frequência que outras camadas, podendo ser reusados com facilidade_

Lançam excecões de negócios para *proteger seu estado interno*, _também conhecido como invariancia_

## Como aplicar essas regras?
- Um caso de uso é basicamente um técnica para capturar, modelar e especificar requisitos, que já foi aprensentado por Ivar Jacobson em 1987



Caso de uso pode charmar outro caso de uso?

Entenda que: qual a necessidade?
Quando estamos modelamente um sistema tem a alta necessidade de um chamar o outro (um serviço chamar o outro), pois as regras estão jogadas jogardas no servicos. Não tem abstrações que abstraem as regras, então um usa o outro o tempo inteiro.
Quando trabalhamos com entidades que tem regras independentes e casos de usos aplica regra, reduz bastante a necessidade de um use case chamar outro (apenas orquestrando as entidades). Vamos supor que mesmo aplicando essa orquestração mesmo assim um useCase vai usar outro. Temos que entender se é uma relação direta(que não é muito boa), ou se existe uma orientação a evento ex:(Quando um pedido é realizado, deve emitir uma nota fiscal, estoque tem que ser devitado, email ser enviado, recomendação ser atualizado,...). Não tem problema uma caso de uso chamar outro apenas tomar cuidado com o  Single Responsability principal, reúso é bom mas se forçar a barra no fundo ele é dependente do cliente dele, quando ele muda ele quebra o cliente, não ficar forçando a barra que reuse, se da de forma saudavel reuse, se não crie um contrato forte, estabiliza, atras de uma fila.

injeção de independeicia ou acopla eles?
- Em geral um caso de uso implmenta um interface. pode ter um comportamento porlimorfico então vocÊ injeta a dependencia. 


## Caso de uso
- Fazer um pedido
- Cancelar um pedido
- Simular o frete
- validar um cupom 

Caso de uso é diferente de CRUD
- normalmente envolvem algum tipo de persistencia



## repositorio
um Repositorio é um *abstração para uma coleção de agregados*, normalmente assoado ao Domain-Driven Desig
Um DAO, ou Data Access Object, *é um padrao de estrutura que separa a camada de dominio da persistenacia*, _oferecendo uma interface para acessar dados de forma polimórfica_
Um gateway é um *objeto que encaptsula o acesso à um sistema externo ou recurso *
Book: Padrões de ARquiteteura de aplicações corporativas.

Qual abordagem usar tanto faz? Desde que utilize interfaces
Essa implementação é feita pelo design pattern *Adapter*, por isso essa camada se chama de interface adapter.Essa camada faz a *ponte* _entre um dispositovo de I/O e os casos de uso_ ela implementa todo tipo de *conversao de dados* codigo SQL faz parte dessa camada, interações com sistema de arquivos e qualquer API externa tabém. Tem uma camada mais abaixo que implementão e fazer o trabalhos essas interfaces, utilizando frameworks e bibliotecas 

Dependency Ruler
 