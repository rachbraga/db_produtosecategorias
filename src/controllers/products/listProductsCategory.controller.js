import showOneCategoryProductService from "../../services/products/showOneCategoryProduct.service";

const listProductsByCategoryController = async (request, response) => {
  const { category_id } = request.params;
  try {
    const ProductsList = await showOneCategoryProductService(category_id);

    return response.status(200).json(ProductsList);
  } catch (error) {
    return response.status(400).json({
      status: "Error",
      message: error.message,
    });
  }
};

export default listProductsByCategoryController;
