# SpotifyApp

Projeto realizado para teste técnico da xp-inventimentos.

Requisitos:
https://github.com/grupo-xp/challenge/tree/master/react

## Preview
[visualizar aplicação](http://www.juhdobbin.com/teste-xp/)

## O que é necessário para rodar o projeto

- `node` (<b>use sempre a versão lts</b>)
- `npm`
- `angular-cli` --- [link](https://angular.io/guide/setup-local)

## Instalando o projeto em sua máquina

1. Clone o projeto desse repositório na sua máquina
2. Via linha de comando dentro da pasta raiz do projeto rode o script `npm install` para instalar todas as dependências do projeto

## Executar a aplicação

No diretório raiz do projeto você tem acesso a alguns scripts:

`npm start` ou `ng serve` - inicia a aplicação, para visualizar acesse a url -> [http://localhost:4200](http://localhost:4200).




## Rodando testes

`ng test` ou `npm test` - executa os testes da aplicação.

`ng test --code-coverage` ou `npm run test-coverage` - executa os testes com <b>coverage report</b>

Isso irá criar/atualizar a pasta `coverage` localizada na raiz do projeto, nela você encontra os arquivos `html` com o coverage da aplicação.

## Build
Opções de build:

desenvolvimento: `npm run build-dev` 
homologação: `npm run build-hom` 
produção: `npm run build-prod` 


## Observações sobre o teste

Por motivos de não querer estender o tempo de realização de testes, resolvi colocar abaixo alguns pontos de observação:

Layout responsivo: Normalmente utilizo algum css de grid system, por o teste não permitir, não criei um css de grid completo, apenas criei baseado nos componentes que eram necessários utilizar, o mesmo em relação ao layout responsivo, criei uma scss de mediaquerys, mas não um scss de grid system
Ao tentar reproduzir fielmente o layout desktop, percebi que as imagens do requisito não estão com os alinhamentos iguais, então tentei chegar o mais próximo o possível seguindo um alinhamento padrão
Outro ponto sobre o layout recebido, é que as descrições de fontes, cores e tamanhos, não dizem onde devem ser aplicadas ( por ex: h1, p, a, etc), por isso tentei seguir por aproximação.
Na descrição do teste, diz que após listar os álbum deveria ser redirecionado para a página do artista, por exemplo albums/mc-kevinho, porém na api do spotify e na lógico de fluxo, coloquei após listar os álbum e o usuário clicar, ser redirecionado ao detalhe do álbum e não do artista (ex: albums/idDoAlbum)
Nos métodos de consumo dos serviços, ficou faltando o tratamento e exibição do retorno de erro ao usuário, por enquanto deixei apenas um console com a exibição do erro
Além dos itens que foram componentizados, ficaram faltando mais alguns que daria para melhorar, por exemplo na página de search-results.component.html onde utilizo duas vezes o álbum grid, logo isso poderia virar mais um componente.
Não fiz muitos testes unitários, porém fiz rodar os testes default do angular, e testei o arquivo search.component.spec.ts para mostrar um pouco o que sei fazer referente a testes.
