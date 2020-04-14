exports.up = function (knex) {
  return knex.schema.createTable("fruits", (tbl) => {
    tbl.increments("id");
    tbl.string("name", 128).notNullable().unique().index();
    tbl.decimal("avgWeightOz");
    tbl.boolean("delicious").defaultTo(1);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("fruits");
};
