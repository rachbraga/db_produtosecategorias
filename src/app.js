import express from "express";
import "dotenv/config";
// import produtctsRouter from "./routes/products.routes";
// import categoriesRouter from "./routes/categories.routes";
import { startDatabase } from "./database";

const app = express();

app.use(express.json());

app.use("/categories", categoriesRouter);
app.use("/products", produtctsRouter);

export default app.listen(3000, () => {
  console.log("Server running");
  startDatabase();
});
