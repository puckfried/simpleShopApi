import express from 'express';
const app = express();
const port = 5000;


app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello")
    });



app.listen(port, () => {
    console.log(`Now listening on port ${port} `);
});



