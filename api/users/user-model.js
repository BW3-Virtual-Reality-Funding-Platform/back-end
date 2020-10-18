const db = require("../../database/connection.js");

module.exports = {
  getAll,
  getById,
  insert,
  edit,
  remove,
};

function getAll() {
  return db("users");
}

function getById(id) {
  return db("users").where({ id }).first();
}

async function insert(details) {
  try {
    const [id] = await db("users").insert(details, "id");
    return getById(id);
  } catch (error) {
    throw error;
  }
}

function remove(id) {
  return getById(id).del();
}

function edit(id, details) {
  return getById(id).update(details);
}
