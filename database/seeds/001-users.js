exports.seed = function (knex) {
  return knex("users").insert([
    { username: "April", password: "password", email: "april@aol.com" },
    { username: "David", password: "password123", email: "david@aol.com" },
    { username: "Juan", password: "pass", email: "juan@aol.com" },
  ]);
};
