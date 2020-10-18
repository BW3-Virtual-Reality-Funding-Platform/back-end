exports.seed = function (knex) {
  return knex("users").insert([
    { username: "April", password: "password" },
    { username: "David", password: "password123" },
    { username: "Juan", password: "pass" },
  ]);
};
