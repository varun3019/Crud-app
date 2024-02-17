const mongoose = require('mongoose');

const counterSchema = mongoose.Schema({
  _id: { type: String, required: true },
  seq: { type: Number, default: 0 },
});

const Counter = mongoose.model("Counter", counterSchema);

const userSchema = mongoose.Schema({
  userId: { type: Number, unique: true },
  Username: String,
  Email: String,
  Phone: String,
});

userSchema.pre("save", function (next) {
  const doc = this;
  Counter.findByIdAndUpdate(
    { _id: "userId" },
    { $inc: { seq: 1 } },
    { new: true, upsert: true }
  )
    .then(function (counter) {
      doc.userId = counter.seq;
      next();
    })
    .catch(function (error) {
      return next(error);
    });
});

const User = mongoose.model("user", userSchema);

module.exports = User;
