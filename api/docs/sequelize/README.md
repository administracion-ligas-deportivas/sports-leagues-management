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
- https://sequelize.org/docs/v6/other-topics/transactions/#concurrentpartial-transactions
- https://www.ibm.com/docs/en/informix-servers/12.10?topic=environment-locks-integrity
- https://sequelize.org/docs/v6/other-topics/transactions/#locks

## Asociaciones

[**Note:** The save() instance method is not aware of associations. In other words, if you change a value from a child object that was eager loaded along a parent object, calling save() on the parent will completely ignore the change that happened on the child.](<https://sequelize.org/docs/v6/core-concepts/assocs/#:~:text=Note%3A%20The%20save()%20instance%20method%20is%20not%20aware%20of%20associations.%20In%20other%20words%2C%20if%20you%20change%20a%20value%20from%20a%20child%20object%20that%20was%20eager%20loaded%20along%20a%20parent%20object%2C%20calling%20save()%20on%20the%20parent%20will%20completely%20ignore%20the%20change%20that%20happened%20on%20the%20child.>)

- https://sequelize.org/docs/v6/advanced-association-concepts/eager-loading/#multiple-eager-loading
- https://sequelize.org/docs/v6/core-concepts/assocs/#why-associations-are-defined-in-pairs
- https://sequelize.org/docs/v6/advanced-association-concepts/advanced-many-to-many/#many-to-many-to-many-relationships-and-beyond
- https://sequelize.org/docs/v6/advanced-association-concepts/polymorphic-associations/

## Fuentes

- https://sequelize.org/docs/v6/other-topics/scopes/
- https://sequelize.org/docs/v6/other-topics/optimistic-locking/
- https://sequelize.org/docs/v6/other-topics/naming-strategies/
- https://styde.net/lazy-loading-vs-eager-loading/
- https://sequelize.org/docs/v6/core-concepts/model-querying-finders/
- https://sequelize.org/docs/v6/core-concepts/getters-setters-virtuals/#virtual-fields
- https://sequelize.org/docs/v6/core-concepts/validations-and-constraints/
- https://sequelize.org/docs/v6/other-topics/constraints-and-circularities/
- https://sequelize.org/docs/v6/other-topics/indexes/
- https://sequelize.org/docs/v6/core-concepts/model-querying-basics/
- https://sequelize.org/docs/v6/core-concepts/model-querying-basics/#limits-and-pagination
- https://sequelize.org/docs/v6/core-concepts/model-querying-basics/#utility-methods
- https://sequelize.org/docs/v6/core-concepts/assocs/
- https://sequelize.org/docs/v6/advanced-association-concepts/eager-loading/
- https://sequelize.org/docs/v6/core-concepts/assocs/#special-methodsmixins-added-to-instances
- https://learn.microsoft.com/en-us/sql/t-sql/language-elements/rollback-transaction-transact-sql?view=sql-server-ver16
- https://sequelize.org/docs/v6/other-topics/migrations/#the-sequelizerc-file
