module.exports = (app) => {
    const issues = require("../controllers/issue.controller.js");

    var router = require("express").Router();

    // Create a new Tutorial
    router.post("/", issues.create);

    // Retrieve all Tutorials
    router.get("/", issues.findAll);

    // // Retrieve all published Tutorials
    // router.get("/published", issues.findAllPublished);

    // Retrieve a single Tutorial with id
    router.get("/:id", issues.findOne);

    // Update a Tutorial with id
    router.put("/:id", issues.update);

    // Delete a Tutorial with id
    router.delete("/:id", issues.delete);

    // // Create a new Tutorial
    // router.delete("/", issues.deleteAll);

    app.use("/api/issues", router);
};