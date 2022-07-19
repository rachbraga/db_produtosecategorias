import updateProductService from "../../services/products/updateProduct.service";

const updateProductController = async (request, response) => {
  try {
    const { id } = request.params;
    const productUpdate = request.body;

    const product = await updateProductService(id, productUpdate);

    return response.status(200).json({ message: "Atualizado", product });
  } catch (error) {
    return response.status(400).json({
      message: error.message,
    });
  }
};

export default updateProductController;
