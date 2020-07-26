module.exports = (mongoose) => {
    var schema = mongoose.Schema(
      {
        nameProject: String,
        DescriptionProject:String,
      },
      {
        timestamps: true,
      }
    );
    schema.method("toJSON", function (){
        const {__v, _id, ...object} = this.toObject();
        object.id = _id;
        return object;
    });
    const Project = mongoose.model("project", schema);
    return Project;
};