import express from "express";
import "dotenv/config";
import productRouter from "./routes/products.routes";
import categoriesRouter from "./routes/categories.routes";
import { startDatabase } from "./database";

const app = express();

app.use(express.json());

app.use("/categories", categoriesRouter);
app.use("/products", productRouter);

export default app.listen(process.env.PORT_TEST || process.env.PORT, () => {
  console.log("Server running");
  startDatabase();
});
