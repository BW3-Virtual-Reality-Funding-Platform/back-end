exports.up = function (knex) {
  return (
    knex.schema

      // Users Table
      .createTable("users", (users) => {
        users.increments();

        users.string("username", 128).notNullable().unique();
        users.string("password", 128).notNullable();
      })
      // Projects Table
      .createTable("projects", (projects) => {
        projects.increments();

        projects.string("title", 256).notNullable().unique();
        projects.string("description", 256).notNullable();
        projects
          .integer("user_id")
          .unsigned()
          .references("users.id")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE");
      })
      // Contributions Table
      .createTable("contributions", (contributions) => {
        contributions.increments();

        contributions
          .integer("user_id")
          .unsigned()
          .references("users.id")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE");
        contributions
          .integer("post_id")
          .unsigned()
          .references("projects.id")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE");
        contributions.integer("amount").notNullable();
        contributions.date("date").notNullable();
      })
  );
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("contributions")
    .dropTableIfExists("projects")
    .dropTableIfExists("users");
};
