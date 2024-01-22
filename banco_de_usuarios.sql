create database banco_de_usuarios;

use banco_de_usuarios;

create table usuario(
	id integer auto_increment primary key,
    nome_completo varchar(200) not null,
    idade varchar (3) not null,
    salario varchar(20) not null
    );
    
insert into usuario values (null, 'Marshall', '38', '2247600');

select * from usuario;