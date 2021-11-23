const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const Blogs = require("./models/Blogs");
const app = express();
const cors = require("cors");
app.use(bodyParser.json());
app.use(cors());

app.get("/", async (req, res) => {
    try {
        const blogs = await Blogs.find()
        res.json(blogs)
    }
    catch {
        res.status(400).json("error has occured");
    }
});
app.post("/api/Blog", async (req, res) => {
    try {
        const blog = new Blogs({
            title: req.body.title,
            content: req.body.content,

        });
        const result = await blog.save();
        res.json({ title: result.title, content: result.content });
    }
    catch {
        res.status(400).json("an Error has occured");
    }
});

app.get("/api/Blog/:id", async (req, res) => {
    try {

        const doc = await Blogs.findById(req.params.id);
        console.log(doc);
        res.json(doc);
    }
    catch (error) {
        console.log(error);
        res.json(error);
    }
})


app.put("/api/Blog", async (req, res) => {
    try {
        const doc = await Blogs.findById(req.body._id);
        doc.title = req.body.title;
        doc.content = req.body.content;
        const result = await doc.save();
        res.json(result);
    }
    catch (error) {
        console.log(error);
        res.status(400).json("an Error has occured");
    }
});



mongoose.connect(`mongodb://${process.env.MONGODB_USERNAME}:${process.env.PASSWORD}@mongodb:27017`, (error) => {
    if (!error) {
        app.listen(process.env.LISTENED_PORT);
    }
});
