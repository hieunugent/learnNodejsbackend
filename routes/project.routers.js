module.exports = (app) => {
                            const projects = require("../controllers/project.controller.js");
                            var router = require("express").Router();
                            //create a new project
                            router.post("/", projects.create);
                            // Retrieve all project
                            router.get("/", projects.findAll);

                            // Delete a Tutorial with id
                            router.delete("/:id", projects.delete);
                            app.use("/api/projects", router);
                          }