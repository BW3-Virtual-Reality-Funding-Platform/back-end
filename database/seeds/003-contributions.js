exports.seed = function (knex) {
  const alias = [
    {
      amount: 200,
      date: "10/18/2020",
      user_id: 1,
      post_id: 2,
    },
    {
      amount: 100,
      date: "10/10/2019",
      user_id: 2,
      post_id: 1,
    },
    {
      amount: 500,
      date: "10/1/2020",
      user_id: 3,
      post_id: 3,
    },
  ];

  return knex("contributions").insert(alias);
};
