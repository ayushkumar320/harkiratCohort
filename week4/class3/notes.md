# General Points for Databases
- ORMs: Object-Relational Mapping tools help in interacting with databases using object-oriented programming languages as we can not directly manipulate the database.
  - Common ORM examples: Mongoose, Prisma, etc.

- Mongoose: A popular ODM (Object Data Modeling) library for MongoDB and Node.js, providing a schema-based solution to model application data.
  - We define our schema using Mongoose's `Schema` class.
  - Example:
    ```javascript
    const userSchema = new mongoose.Schema({
      name: String,
      email: String,
      age: Number
    });
    ```
- MongoDB is schemaless, Mongoose stricts the schema, enforcing a structure on the documents within a collection.
