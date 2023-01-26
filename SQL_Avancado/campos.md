# Foreign Key (chave estrangeira)

É a ferramenta usada relacionar tabelas.

`- Tabela Perfil`
nome           | nome_de_usuario  | descricao                  | Telefone    | id_user
Luisa Ferber   | @luisa           | As dacinhas mais originais | 1112234567  | 1
João Marcos    | @joa             | oh no no no                | 1234356645  | 2

`- Tabela Post`
Post                | video        | data                 | id_user
#bancodedados       | foto.png     | 01-04-2020-09-30-22  | 1
Olha esse video top | video.mp4    | 01-04-2020-09-30-22  | 2
Olha esse post top  | video.mp4    | 01-04-2020-09-30-22  | 1


- Primary Key: 'id_user' é a primeira chave, usada para identificar o usuário.
- Foreign Key: 'id_user' é a chave usada para dizer que a tabela A se relaciona com a Tabela B através desse campo.Ela é estrangeira, porque ela seria a primary key da tabela A.

Uma tabela pode ter mais de uma foreign key, mas não pode tirar a primary key.

## UNIQUE 

Comando usado no banco de dados para referir que aquele dado é único e não pode se repetir em informação.

No caso, o campo "node_de_usuario" é um campo unico. Assim, os valores inseridos não podem se repetir. Contribuindo para a integridade do seu banco.

## Exemplo Escola

- Tabela Aluno
    - matricula: NUMBER PRIMARY KEY
    - nome: TEXT
    - cpf: NUMBER UNIQUE
    - responsavel: TEXT

- Tabela Professor
    - id_professor: NUMBER PRIMARY KEY
    - nome: TEXT
    - cpf: NUMBER UNIQUE
    - materia: TEXT

- Tabela Aulas
    - id_professor: NUMBER FOREIGN KEY (professor)
    - id_aluno: NUMBER FOREIGN KEY (aluno)