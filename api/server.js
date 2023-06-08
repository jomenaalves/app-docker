import express from 'express';

const app = express();
const port = 3080;

app.get('/', (req, res) => {
    res.status(200).send({
        title: "Node Express APIs",
        version: "0.0.1"
    });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
