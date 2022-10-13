import express from 'express';
const app = express();
const port = process.env.PORT;


app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello")
    });



app.listen(port, () => {
    console.log(`Now listening on port ${port} `);
});



