const db = require("../models/index");
const Project = db.projects;

exports.create = (req, res) => {
    if(!req.body.nameProject){
        res.status(400).send({
            message: "This can not be empty !",
        });
        return;
    }
    const project = new Project({
        nameProject: req.body.nameProject,
    });

    project
        .save(project)
        .then((data) => {
            res.send(data);
        })
        .catch((err)=> {
            res.status(500).send({
                message:
                err.message || "some error occurred while creating new project."
            });
        });
};
exports.findAll = (req, res) => {
    const nameProject = req.query.nameProject;
    var condition = nameProject
        ? { nameProject: { $regex: new RegExp(nameProject), $options: "i" } }
        : {};

    Project.find(condition)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Project.",
        });
      });
}