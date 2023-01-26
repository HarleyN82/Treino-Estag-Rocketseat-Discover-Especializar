# Comandos Avançados

## ORDER BY

`SELECT * FROM aluno ORDER BY nome`
Organiza os elementos na ordem crescente.

`SELECT * FROM aluno ORDER BY nome DESC`
Organiza os elementos na ordem decrescente.

## LIMIT

`SELECT * FROM aluno LIMIT 2`
Limita a quantidade de dados expostos. Ou sej,a ele impõe um limite de resultados.

## OFFSET

É para dizer ao banco de dados quantos registros ele vai ignorar.

`SELECT * FROM funcionarios LIMIT 4 OFFSET 2`

Dessa forma, ele vai ignorar os dois primeiros que encontrar, então o limite vai expor os 4 próximos valores.

## COUNT

Usado para saber a quantidade de dados da tabela. Nele, passamos um parâmetro para ele saber de onde que ele vai contar.

`SELECT COUNT (nome) FROM funcionarios `

Nesse caso, temos 10 funcionários.

## GROUP BY

Agrupa dados semalhantes.

`SELECT count(id_departamento) FROM funcionarios GROUP BY id_departamento`

Nesse caso, queremos saber a quantidade de dados por departamento.

`SELECT id_departamento, count(id_departamento) FROM funcionarios GROUP BY id_departamento`
Colocando o "id_departamento" na frente vemos de forma mais clara a quantidade de grupo ao qual cada dado se relaciona.

Obs: Ele pode ser ajustada por um parâmetro que não vai ser mostrado. Por isso, não tem problema referenciar algo nele e não no select.

## JOIN, GROUP BY a COUNT juntos

`SELECT departamentos.descricao, count(funcionarios.id_departamento) FROM funcionarios JOIN departamentos ON funcionarios.id_departamento = departamentos.id_dept GROUP BY departamentos.id_dept`

Assim, podemos vê a quantidade de funcionários por departamento. Sem o "Group By" ele só vai expor a quantidade total de funcionários.

## HAVING

`SELECT departamentos.descricao, count(funcionarios.id_departamento) FROM funcionarios JOIN departamentos ON funcionarios.id_departamento = departamentos.id_dept GROUP BY departamentos.id_dept HAVING count(funcionarios.id_departamento) >= 2`

Eu quero pegar todos os funcionários que tem um departamento e quero contar quantos funcionários eu tenho por departamento. E também quero expor apenas os dados com mais de dois ou mais funcionários por departamento. 

`WHERE count(funcionarios.id_departamento) >= 2`

Poderíamos usar o "Where", mas ele só serve para análise com os próprios campos e não com eles agrupados. Para isso, temos o having.

`SELECT departamentos.descricao, count(funcionarios.id_departamento) FROM funcionarios JOIN departamentos ON funcionarios.id_departamento = departamentos.id_dept GROUP BY departamentos.id_dept HAVING count(funcionarios.id_departamento) IN (2,3)`

Obs: Todos os operadores logicos funciona aqui também.