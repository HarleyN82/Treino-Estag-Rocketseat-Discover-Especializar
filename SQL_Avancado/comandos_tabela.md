## CREATE TABLE
É o comando usado para criar uma tabela.

- Tabela Alunos
`CREATE TABLE alunos( matricula INTEGER PRIMARY KEY AUTOINCREMENT,nome TEXT,cpf INTEGER UNIQUE, responsavel TEXT )`

- Tabela Professores
`CREATE TABLE professores( id_professor INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, cpf INTEGER UNIQUE, materia TEXT)`

- Tabela Aulas
`CREATE TABLE aulas(id_professor INTEGER, matricula INTEGER,FOREIGN KEY(id_professor) REFERENCES professores(id_professor),FOREIGN KEY(matricula) REFERENCES alunos(matricula))`

## ALTER TABLE
É o comando usado para atualizar dados da tabela.

- Renomeando nome da tabela alunos
`ALTER TABLE aluno RENAME TO alunos`

- Renomeando nome da tabela professores
`ALTER TABLE professor RENAME TO professores`

- Renomeando nome da coluna (campo) id_aluno para matricula_aluno
`ALTER TABLE aulas RENAME COLUMN id_aluno TO matricula_aluno`

## DROP TABLE
É o comando usado para deletar uma tabela

`DROP TABLE aulas`
Dessa forma, a tabela aulas é apagada com tudo.