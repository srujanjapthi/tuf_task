import express from 'express';
const PORT = 3000;

const app = express();
app.use(express.json());

app.get("/health", async (req, res) => {
    res.send({
        message: "Health OK!"
    });
});

app.listen(PORT, () => {
    console.log("Server started on localhost:3000");
});
