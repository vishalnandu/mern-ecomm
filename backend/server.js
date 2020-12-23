import Express from 'express';
import data from "./data.js";

const app = Express();

app.get('/api/products', (req,res)=>{
    res.send(data.products);
});

app.get('/',(req,res)=>{
    res.send("Backend Express Server is Ready");
});

const port = process.env.port || 5000;

app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
});

