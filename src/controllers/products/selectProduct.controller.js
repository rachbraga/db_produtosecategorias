import selectProductService from "../../services/products/selectProduct.service";

const selectProductController = async (request, response) => {
  try {
    const { id } = request.params;
    const product = await selectProductService(id);

    return response.status(200).json(product);
  } catch (error) {
    return response.status(400).json({
      status: "Error",
      message: error.message,
    });
  }
};

export default selectProductController;
