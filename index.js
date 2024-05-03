import express from "express";
import cors from "cors";
import ProvinceRouter from "./src/controllers/province-controller.js";

const app = express();
const port = 3000;

// Inclusión de los Middlewares
app.use(cors());
app.use(express.json());
app.use('', ProvinceRouter);
app.use('/api/province', ProvinceRouter);
app.use('/api/province/:id', ProvinceRouter);

app.listen(port, () => {
 console.log(`"server" Listening on port ${port}`);
})