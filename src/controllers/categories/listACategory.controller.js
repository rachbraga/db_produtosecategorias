import listACategoryService from "../../services/categories/listACategory.service";

const listACategoryController = async (request, response) => {
  try {
    const { id } = request.params;
    const category = await listACategoryService(id);
    return response.status(200).json(category);
  } catch (error) {
    return response.status(400).json({ message: error.message });
  }
};

export default listACategoryController;
