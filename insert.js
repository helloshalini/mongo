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
  address: String,
  age: Number,
});

const user = mongoose.model("user", userSchema);

user.insertMany( [
    {user: "tony", address: "delhi", age: 56}, 
    {user: "peter", address: "bihar", age: 46}, 
    {user: "bruce", address: "goa", age: 78}, 
]).then( (res) => {
  console.log(res);
});