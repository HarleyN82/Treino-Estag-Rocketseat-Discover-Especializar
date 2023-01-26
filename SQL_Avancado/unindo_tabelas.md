# JOIN

`SELECT * FROM funcionarios JOIN departamentos ON departamentos.id_dept = funcionarios.id_departamento`

O JOIN serve para trazer o conteúdo de duas tabelas e junto com o ON selecionamos o ponto de relacionamento entre eles.

## JOIN COM WHERE

`SELECT * FROM funcionarios JOIN departamentos ON departamentos.id_dept = funcionarios.id_departamento WHERE funcionarios.id_departamento = 2`
Dessa forma, eu posso impor um limite de exposição dos dados. E como "funcionarios.id_departamento = 2" quanto "departamentos.id_dept = 2" tem uma relação, então colocar um ou outro irá funcionar.

## Especificando Campos

`SELECT funcionarios.nome, funcionarios.cpf, departamentos.descricao FROM funcionarios  JOIN departamentos ON funcionarios.id_departamento = departamentos.id_dept`
Dessa forma, eu posso filtar os meus dados, selecionando quais dados eu quero e de onde eles são.

# ALIAS

`SELECT func.nome, func.cpf, dept.descricao FROM funcionarios as func JOIN departamentos as dept ON func.id_departamento = dept.id_dept`

Permite que a gente crie nomes apenas para o select. Isso pode servir para evitarmos errar na hora de referenciar. 

Essa configuração não muda a nomenclatura no bando de dados em si, apenas quando formos chamar os dados.

`SELECT func.nome as 'Nome' , func.cpf as 'CPF', dept.descricao as 'Departamento' FROM funcionarios as func JOIN departamentos as dept ON func.id_departamento = dept.id_dept`

Dessa forma, podemos tentar mudar para a visualização da tabela, o nome dos campos no cabeçalho.

# LEFT OUTER JOIN

`SELECT * FROM funcionarios LEFT OUTER JOIN departamentos ON funcionarios.id_departamento = departamentos.id_dept`

Ele faz com que todo o conteúdo que esteja na tabela A, ou seja, os funcionarios, aparece mesmo que não tenha um relacionamento com a tabela B (por não ter dados preenchidos).

`SELECT * FROM departamentos LEFT OUTER JOIN funcionarios ON funcionarios.id_departamento = departamentos.id_dept`

E se quisermos mostrar todos os dados da tabela B mesmo que não tenha relação com a tabela A, ou seja, os departamentos, trocamos a posição de chamada das tabelas. Porque, "left outer" signfica priorizar a tabela da esquerda.