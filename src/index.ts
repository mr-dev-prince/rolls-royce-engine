import express from 'express';
import { connectDb } from './db/connectDB';
import { products } from './models/product';
import { createUser } from './controllers/user.controller';

const app = express();

app.use(express.json());

// sync and connect database
connectDb();

app.post('/create', async (req, res) => {

    const { name, price, description } = req.body;

    try {
        const result = await products.create({ name, price, description });
        console.log("Product Created Successfully", result);
        res.json(result);
    } catch (error) {
        console.log("Error while creating product", error);
    }
})

app.post("/create-user", createUser);

app.get('/', (req, res) => {
    res.send('Hello World');
})


app.listen(8000, () => {
    console.log('Server is running on port 8000');
})
