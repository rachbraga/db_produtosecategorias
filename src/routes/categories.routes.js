import { Router } from "express";
import createCategoryController from "../controllers/categories/createCategoryController.controller";
import listACategoryController from "../controllers/categories/listACategory.controller";
import listCategoryController from "../controllers/categories/listCategory.controller";
import updateCategoryController from "../controllers/categories/updateCategory.controller";
import deleteCategoryController from "../controllers/categories/deleteCategory.contorller";

const categoryRouter = Router();

categoryRouter.post("/", createCategoryController);
categoryRouter.get("", listCategoryController);
categoryRouter.get("/:id", listACategoryController);
categoryRouter.patch("/:id", updateCategoryController);
categoryRouter.delete("/:id", deleteCategoryController);

export default categoryRouter;
