const Issue = require('./issue.model');

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
    schema.pre('remove', function(next){
        Issue.find({nameProject:this.id}, (err, issues)=> {
            if(err){
                next(err)
            }else if (issues.length > 0){
                next(new Error('this author has books still'))
            }else{
                next()
            }

        })
    })
    const Project = mongoose.model("project", schema);
    return Project;
};