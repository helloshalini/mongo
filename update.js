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

user.updateOne( {name: "Cheery"}, {age: 58})
.then ( (res) => {
    console.log(res);
})
.catch( (err) => {
    console.log(err);
});