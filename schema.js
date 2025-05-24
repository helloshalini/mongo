const mongoose = require('mongoose');

main().then((res) => {
    console.log("Connection Successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookschema = new mongoose.Schema( {
    title: {
        type: String,
        required: true,
        maxLength: 15,
    },
    author: {
        type: String,
    },
    price: {
        type: Number,
        min: [1, "Price is too low for amazon selling"],
    },
    discount: {
        type: Number,
        default: 0,
    },
    category: {
        type: String,
        enum: ["fiction", "non-fiction"],
    },
    genre: [String]
})

const Book = mongoose.model("Book", bookschema);

// let book1 = new Book ({
//     title: "Marvel Comics",
//     price: 7889,
//     category: "fiction",
//     genre: ["comics", "superheroes"]
// });

// book1.save()
// .then((res) => {
//     console.log(res);
// })
// .catch( (err) => {
//     console.log(err);
// });

Book.findByIdAndUpdate("6831a0ff44c683f3ca03df44", {price: -500}, {runValidators: true})
.then((res) => {
    console.log(res);
})
.catch( (err) => {
    console.log(err.errors.price.properties.message);
});