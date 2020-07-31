const db = require("../models/index");
const Issue = db.issues;
exports.create= (req, res) => {
    // validate request 
        if (!req.body.nameProject || !req.body.sumariesIssue) {
          res.status(400).send({
            message: "Content can not be empty!",
          });
          return;
        }
    // create a ISsue in back end
        const issue = new Issue ({
            nameProject:req.body.nameProject,
            sumariesIssue: req.body.sumariesIssue,
            descriptionsIssue: req.body.descriptionsIssue,
            isDone:req.body.isDone,
        });

    // save issue in the database
     issue
        .save(issue)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                err.message || "some error occurred while creating the Issue."
            });
        });
};

exports.findAll =(req, res) => {
    const nameProject = req.query.nameProject;
    var condition = nameProject
        ? { nameProject: { $regex: new RegExp(nameProject), $options: "i" } }
        : {};

    Issue.find(condition)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Issue.",
            });
        });
}

// Find a single Issue with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Issue.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found Issue with id " + id });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving Issue with id=" + id });
        });

};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!",
        });
    }

    const id = req.params.id;

    Issue.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then((data) => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Issue with id=${id}. Maybe Issue was not found!`,
                });
            } else res.send({ message: "Issue was updated successfully." });
        })
        .catch((err) => {
            res.status(500).send({
                message: "Error updating Issue with id=" + id,
            });
        });
};
exports.delete = (req, res) => {
    const id = req.params.id;

    Issue.findByIdAndRemove(id)
        .then((data) => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete Issue with id=${id}. Maybe Issue was not found!`,
                });
            } else {
                res.send({
                    message: "Issue was deleted successfully!",
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Could not delete Issue with id=" + id,
            });
        });
};