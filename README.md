# Troca comigo? :books:
> Conectando pessoas e livros com poucos cliques

Como projeto final do bootcamp {reprograma}, essa API tem como proposta unir usuários que possuem livros para trocar. Além disso, traz também um pilar de doações, em que pessoas que necessitam de ajuda para adquirir seus livros para vestibular ou faculdade, poderão recebê-los com ajuda de outro usuário.

### Pré-requisitos

Para utilizar essa API, é necessário ter instalado na sua máquina as tecnologias Node.JS e MongoDB.

### Instalação :woman_technologist:

`Fork` esse repositório para seu github. `Clone` na sua máquina. Após entrar na pasta pelo **PROMPT**, dê `npm init` e `npm install`.

### Utilização 

Para inicialiazar o server:
```
npm run start
```

Para inicializar o server em modo desenvolvedor:
```
npm run start:dev
```

#### Rotas

A API está sendo escutada na `porta 3000`, dessa forma, para todas as rotas serem acessadas localmente, use `http://localhost:3000/`

- `/users` - visualizar ou adicionar usuários 

- `/users/donation` - visualizar todos usuários que querem livros por doação

- `/users/trade` - visualizar todos usuários que possuem livros para troca

- `/users/:id` - visualizar ou remover usuário por id

- `/users/:userId/books` - adicionar livros no banco do usuário

- `/users/:userId/books/bookId` - remover ou atualizar livros do usuário


### Contribuindo com o projeto

1. Faça o _fork_ do projeto (<https://github.com/emilyduraes/reprograma-projeto-final/fork>)
2. Crie uma _branch_ para sua modificação (`git checkout -b feature/fooBar`)
3. Faça o _commit_ (`git commit -am 'Add some fooBar'`)
4. _Push_ (`git push origin feature/fooBar`)
5. Crie um novo _Pull Request_


[![reprograma](http://reprograma.com.br/images/meta/reprograma-fb-549afe21.png)](https://www.reprograma.com.br/)

