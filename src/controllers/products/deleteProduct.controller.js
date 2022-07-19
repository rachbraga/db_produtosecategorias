import deleteProductService from "../../services/products/deleteProduct.service";

const deleteProductController = async (request, response) => {
  try {
    const { id } = request.params;
    const product = await deleteProductService(id);

    return response.status(204).json({ message: "Product deleted!", product });
  } catch (error) {
    return response.status(400).json({
      status: "Error",
      message: error.message,
    });
  }
};

export default deleteProductController;
