# MemoriCards

Imagine poder estudar ou aprender algo novo de forma eficiente, divertida e totalmente personalizada às suas necessidades e interesses. Com MemoriCards, você tem acesso a uma plataforma de aprendizado inovadora que utiliza flashcards autorais para desafiar a sua memória e ajudá-lo a dominar conceitos importantes de maneira dinâmica e interativa. Crie seus próprios cards e pratique de forma eficiente, seja para se preparar para uma prova, aprender um novo idioma ou simplesmente ampliar seu conhecimento em qualquer área. Com MemoriCards, você transforma seu aprendizado em uma jornada prazerosa e recompensadora, e alcança resultados surpreendentes em pouco tempo. Experimente agora essa ferramenta revolucionária e sinta a diferença em seu potencial de aprendizagem!

## Documentação da API

A url base da API é https://memori-cards-api.onrender.com

#### Cadastro de usuário

```http
  POST /signup
```

| Parâmetro  | Tipo     | Descrição        |
| :--------- | :------- | :--------------- |
| `email`    | `string` | **Obrigatório**. |
| `password` | `string` | **Obrigatório**. |

#### Login de usuário

```http
  POST /signin
```

| Parâmetro  | Tipo     | Descrição        |
| :--------- | :------- | :--------------- |
| `email`    | `string` | **Obrigatório**. |
| `password` | `string` | **Obrigatório**. |

#### AutoLogin

```http
  GET  /users/:usersId:
```

| Parâmetro | Tipo     | Descrição                                |
| :-------- | :------- | :--------------------------------------- |
| `token`   | `string` | **Obrigatório no authorization header**. |

#### Busca todos os flashcards do usuário logado

```http
  GET  /users/:usersId:?_embed=flashcards
```

| Parâmetro | Tipo     | Descrição                                |
| :-------- | :------- | :--------------------------------------- |
| `token`   | `string` | **Obrigatório no authorization header**. |

#### Busca flashcard por id

```http
  GET  /flashcards/:id:
```

| Parâmetro | Tipo     | Descrição                                |
| :-------- | :------- | :--------------------------------------- |
| `token`   | `string` | **Obrigatório no authorization header**. |

#### Criar Flashcard

```http
  POST   /flashcards/:id:
```

| Parâmetro  | Tipo     | Descrição                                |
| :--------- | :------- | :--------------------------------------- |
| `token`    | `string` | **Obrigatório no authorization header**. |
| `question` | `string` | **Obrigatório**.                         |
| `answer`   | `string` | **Obrigatório**.                         |

#### Editar Flashcard

```http
  PATCH    /flashcards/:id:
```

| Parâmetro  | Tipo     | Descrição                                |
| :--------- | :------- | :--------------------------------------- |
| `token`    | `string` | **Obrigatório no authorization header**. |
| `question` | `string` | Novo texto para questão.                 |
| `answer`   | `string` | Novo texto para resposta.                |

#### Excluir Flashcard

```http
  PATCH    /flashcards/:id:
```

| Parâmetro  | Tipo     | Descrição                                |
| :--------- | :------- | :--------------------------------------- |
| `token`    | `string` | **Obrigatório no authorization header**. |
| `question` | `string` | Novo texto para questão.                 |
| `answer`   | `string` | Novo texto para resposta.                |

## Autores

- [@Luhmaria](https://github.com/Luhmaria)
- [@ThomazRc](https://github.com/ThomazRc)
- [@Ericvini000](https://github.com/Ericvini000)
- [@math-rosa](https://github.com/math-rosa)
- [@niljoshua](https://github.com/niljoshua)

## Acesso a aplicação

Acesse o link abaixo e desfrute!

```url

```

## Funcionalidades

- Cadastro, edição e exclusão de flashCards
- Personalização do nome do quadro
- Possibilidade de testar os conhecimentos
- Possibilidade de checar as respostas na dashboard
