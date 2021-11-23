const mongoose = require("mongoose");
const blogSchema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    content: {
        type: String,
        require: true
    },
    Issued: {
        type: Date,
        default: Date.now
    }

})
module.exports = mongoose.model("Blogs", blogSchema);