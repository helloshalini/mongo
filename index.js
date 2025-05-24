const mongoose = require('mongoose');

main().then((res) => {
    console.log("Connection Successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const user = mongoose.model("user", userSchema);

// const user1 = new user({
//   name: "Cheery",
//   email: "Cheery@yahoo.in",
//   age: 50,
// });

// user1.save().then();

const user2 = new user({
  name: "eve",
  email: "eve@yahoo.in",
  age: 48,
});

user2.save().then( (res) => {
  console.log(res)
})
.catch( (err) => {
  console.log(err);
});