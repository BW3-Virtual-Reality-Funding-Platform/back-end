const express = require("express");
const db = require("./project-model.js");
const router = express.Router();

// get project by id
router.get("/", (req, res) => {
  db.getAll()
    .then((projects) => {
      res.status(200).json({ data: projects });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

// get project by id
router.get("/:id", (req, res) => {
  const id = req.params.id;

  db.getById(id)
    .then((project) => {
      if (project) {
        res.json({ project });
      } else {
        res.status(404).json({ message: "Project not found. Check id." });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

// add project
router.post("/add", (req, res) => {
  const details = req.body;
  db.insert(details)
    .then((project) => {
      res.status(201).json({ project });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

// edit project by id
router.put("/:id", (req, res) => {
  const id = req.params.id;
  const changes = req.body;

  db.edit(id, changes)
    .then((project) => {
      if (project) {
        res.status(200).json({ project });
      } else {
        res.status(404).json({ message: "Could not find project. Check id. " });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

// delete project
router.delete("/:id", (req, res) => {
  const id = req.params.id;

  db.remove(id)
    .then((project) => {
      if (project) {
        res.status(200).json({ removed: project });
      } else {
        res.status(404).json({ message: "Could not find project. Check id. " });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;
