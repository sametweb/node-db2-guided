//the .up() describes the changes to the database schema
exports.up = function (knex) {
  return knex.schema.createTable("veggies", (tbl) => {
    // a primary key called id that aoto increments
    tbl.increments("id");

    // an index make searching for a value in a column a lot faster
    tbl.string("name", 255).notNullable().unique().index();
    tbl.boolean("tasty").defaultTo(true);
  });
};

//the .down() describes how to undo the changes
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("veggies");
};
