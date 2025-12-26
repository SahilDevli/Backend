import express from "express";
import cors from "cors";

const app = express();
const PORT = 4001;
app.use(cors());

app.get("/",(req,res)=>{
    res.send(<h2>Hello Express World</h2>);
});

app.listen(PORT,()=>{
    console.log(`Server is ruuning on port : https://localhost:${PORT}`);
});