# Relação Entre Tabelas

Em um banco de dados podemos relacionar duas tabelas entre si, por meio de um dado que não se repete para não haver problemas e equívocos.

Assim, precisamos criar um campo na tabela B que se conecta com um dado único da tabela A.

## Exemplo da Escola

`- Tabela do Aluno`

matricula | nome           | cpf        | responsavel
2         | Luisa Ferber   | 1234567890 | Elana Ferber
0202      | Mariano Garcia | 0987654321 | Marcio Garcia
1         | João Marcos    | 3452618792 | Julio Marcos

Obs: Os números da matrícula podem ser sequencias, mas não repetitivo.

`- Tabela do Professor`

id_professor | nome           | cpf        | materia        
1            | Samara Silvia  | 9082897234 | JavaScript     
2            | Emma Santos    | 1234231423 | NodeJS         
3            | Olavo Silva    | 6745342214 | Banco de Dados 

Obs: A coluna "aulas" refere-se a relação dos alunos com os professores.

`- Relação Entre Tabelas`

id_professor | id_aluno
1            | 2
1            | 0202
1            | 1
2            | 0202
2            | 1
3            | 2
3            | 1

Obs: Nesse caso, Emma é professora de Mariano e João.