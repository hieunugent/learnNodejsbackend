module.exports = (mongoose) => {
  const passportLocalMongoose = require("passport-local-mongoose");
  var schema = mongoose.Schema(
    {
      username: String,
      password: String,
      secret: String,
    }
  );
  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });
  schema.plugin(passportLocalMongoose);
  const Users = mongoose.model("user", schema);
  return Users;
};
