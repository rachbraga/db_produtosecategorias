import { Router } from "express";

import createProductController from "../controllers/products/createProduct.controller";
import deleteProductController from "../controllers/products/deleteProduct.controller";
import listProductsByCategoryController from "../controllers/products/listProductsCategory.controller";
import listProductsController from "../controllers/products/listProducts.controller";
import updateProductController from "../controllers/products/updateProduct.controller";
import selectProductController from "../controllers/products/selectProduct.controller";

const productRouter = Router();

productRouter.post("", createProductController);
productRouter.delete("/:id", deleteProductController);
productRouter.patch("/:id", updateProductController);
productRouter.get("", listProductsController);
productRouter.get("/:id", selectProductController);
productRouter.get("/category/:category_id", listProductsByCategoryController);

export default productRouter;
