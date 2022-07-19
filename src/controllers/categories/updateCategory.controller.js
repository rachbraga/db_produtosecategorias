import updateCategoryService from "../../services/categories/updateCategory.service";

const updateCategoryController = async (request, response) => {
  try {
    const { id } = request.params;
    const newCategory = request.body.name;
    const updated = await updateCategoryService(id, newCategory);

    return response.status(200).json(updated);
  } catch (error) {
    return response.status(400).json({ message: error.message });
  }
};

export default updateCategoryController;
