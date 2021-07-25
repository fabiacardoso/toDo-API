# API-to-do-server

# DOCUMENTAÇÃO DA API ToDo

- Quero uma rota de apresentação do projeto
- Retornar todas as tarefas
- Filtrar  tarefas por id
- Deletar uma tarefa
- Cadastrar um nova tarefa, somente com nome e descrição
- id tem que ser randômico
- Toda atividade quando cadastrada deve ficar automaticamente com status concluindo como false

## Rotas:

- **[GET] "/"**

retorna a apresentação o projeto

- **[GET] "/tarefas"**

retorna todas as as tarefas

- **[GET] "/tarefas/:id"**

retorna uma tarefa por id

- **[DELETE] "/tarefas/:id"**

deleta uma tarefa

- **[POST] "/tarefas/cadastrar"**

cria uma nova tarefa

Deverá ser enviado pelo **Body:**

```json
{

"id": "STRING RANDOMICO",

"dataInclusao": "STRING AUTOMATICO",

"concluido": false,

"descricao": "STRING - OBRIGATORIO",

"nomeColaborador": "STRING - OBRIGATORIO"

}
```


