exports.seed = function (knex) {
  const alias = [
    {
      title: "Save the dogs",
      description: "We want to save the dogs",
      user_id: 1,
      img_url:
        "https://www.pexels.com/photo/two-yellow-labrador-retriever-puppies-1108099/",
      fund_date: "2021-12-30",
      total_funded: 3000,
      funding_goal: 15000,
    },
    {
      title: "Plant trees",
      description: "More trees, less waste",
      user_id: 2,
      img_url:
        "https://www.pexels.com/photo/palm-trees-under-blue-sky-3935703/",
      fund_date: "2021-06-10",
      total_funded: 1000,
      funding_goal: 10000,
    },
    {
      title: "Put David through college",
      description: "He needs monies",
      user_id: 3,
      img_url:
        "https://www.pexels.com/photo/accomplishment-ceremony-education-graduation-267885/",
      fund_date: "2020-12-03",
      total_funded: 100,
      funding_goal: 5000,
    },
  ];

  return knex("projects").insert(alias);
};
