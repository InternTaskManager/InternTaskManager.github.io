const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const uri = "mongodb+srv://interntaskmanager:oReLywQobu06yXIv@cluster0.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
    const collection = client.db("test").collection("tasks");

    app.post('/api/tasks', async (req, res) => {
        const { internName, taskName, taskDescription, status } = req.body;
        try {
            const result = await collection.insertOne({
                internName,
                taskName,
                taskDescription,
                status
            });
            res.status(201).json({ message: 'Task created successfully!' });
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Error creating task' });
        }
    });

    app.listen(3000, function () {
        console.log('App is listening on port 3000!');
    });
});
