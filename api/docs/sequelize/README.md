# Sequelize

Recursos que ocupamos para trabajar con Sequelize.

- https://sequelize.org/docs/v6/core-concepts/model-querying-basics/
- https://sequelize.org/docs/v6/other-topics/migrations/
- https://sequelize.org/docs/v6/other-topics/transactions/

## sync()

Esto no lo utilizaremos en producción. Utilizaríamos migraciones, que es lo
recomendado en la documentación.

- [Synchronization in production](https://sequelize.org/docs/v6/core-concepts/model-basics/#synchronization-in-production)
- [Migrations](https://sequelize.org/docs/v6/other-topics/migrations/)

## Transactions

Tal como se comenta en la documentación, [Model Querying - Basics](https://sequelize.org/docs/v6/core-concepts/model-querying-basics/#specifying-attributes-for-select-queries)

> Important notice: to perform production-ready queries with Sequelize, make sure you have read the Transactions guide as well. Transactions are important to ensure data integrity and to provide other benefits.

- [Transactions](https://sequelize.org/docs/v6/other-topics/transactions/)
- https://learn.microsoft.com/en-us/sql/t-sql/language-elements/rollback-transaction-transact-sql?view=sql-server-ver16
