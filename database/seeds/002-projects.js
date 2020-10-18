exports.seed = function (knex) {
  const alias = [
    {
      title: "Save the dogs",
      description: "We want to save the dogs",
      user_id: 1,
    },
    {
      title: "Plant trees",
      description: "More trees, less waste",
      user_id: 2,
    },
    {
      title: "Put David through college",
      description: "He needs monies",
      user_id: 3,
    },
  ];

  return knex("projects").insert(alias);
};
