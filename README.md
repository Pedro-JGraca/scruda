# SCRUDA
Total manipulation system of a relational database. 
Sistema de manipulação total de um banco de dados relacional.

<h2 align="center"> Descrição </h2>
<p align="justify">
O nome do projeto é SCRUDA pq é a junção do S de System com CRUDA.
O objetivo é construir um sistema CRUDA para um banco relacional associado a um sistema de administração de usuários. A motivação está no desejo de aprender a desenvolver todas as ferramentas necessárias para um sistema completo genérico e profissional.
</p>
<p align="justify">
CRUDA é a sigla formada pelas 5 primeiras letra de importantes funções de um sistema que trabalha com um banco de dados relacional
</p>

- C: Create (criar)
    - <p align="justify">criar uma tabela ou um dado para uma tabela </p>
- R: Read (ler)
    - <p align="justify">ler as informações de um banco de dados</p>
- U: Update (atualizar)
    - <p align="justify">atualizar os dados de uma tabela</p>
- D: Delete (apagar)
    - <p align="justify">apagar dados ou uma tabela</p>
- A: alter (alterar)
    - <p align="justify">alterar a estrutura de uma tabela</p>

<h2 align="center"> Tecnologias Usadas </h2>

- Para o front: React + Material-ui
- Para o Back: Flask
- Para o BD: MySQL
- Para a Infra: Docker e Bash

<h2 align="center"> Install </h2>
<p align="justify"> para que o sistema funcione veja abaixo</p>

<h2 align="center"> Sobre o Front </h2>
<p align="justify"> A ideia é fazer um dashboard com 4 telas: Login (0), Register (1), DashBoard (2), Admin(3)</p>

- [_] 0 Login 
- [_] 1 Register New User


- [_] 2 white screen for selecting screens on the dashboard (DashBoard)

    - [_] 2.1     Show DBS (without ADMIN,USERS)/ Create New DBs / Select DB
        - [_] 2.1.1     Create/Drop TABLES in DB selected/ select TABLE
        - [_] 2.1.2     SET structure in TABLE selected (set foreign keys) / PUT/DELETE DATA in Table
    - [_] 2.2       Profile the USER
    - [_] 2.3       admin
        - [_] 2.3.1     see logs
        - [_] 2.3.2     show/edit Users in the system
    

<p align="justify">Map the system:</p>

- 0 -> 1
- 0 -> 2
    - 2 <-> 2.1 <-> 2.1.1 <-> 2.1.2 
    - 2 <-  2.1.2
    - 2 <-> 2.2
    - 2 <-> 2.3
    - 2 <-> 2.3.1
    - 2 <-> 2.3.2

- 0 <- *

<h2 align="center"> Sobre o Back </h2>


<h2 align="center"> Sobre a infra </h2>