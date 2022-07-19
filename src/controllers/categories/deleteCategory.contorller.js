import deleteCategoryService from "../../services/categories/deleteCategory.services";

const deleteCategoryController = async (request, response) => {
  try {
    const { id } = request.params;
    const deleted = await deleteCategoryService(id);
    return response.status(204).json(deleted);
  } catch (error) {
    return response.status(400).json({ message: error.message });
  }
};

export default deleteCategoryController;
