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
        DescriptionProject:req.body.DescriptionProject,
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


exports.delete = (req, res) => {
    const id = req.params.id;
    Project.findByIdAndRemove(id).then((data)=> {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Project with id=${id}. maybe project in not found`,
          });
        } else {
          res.send({
            message: "Project was deleted successfully!",
          });
        }
              
    }).catch((err) => {
            res.status(500).send({
                message: "Could not delete Project with id=" + id,
            });
        });
}