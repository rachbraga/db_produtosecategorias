import database from "../../database";

export const listCategoryService = async () => {
  try {
    const response = await database.query("SELECT * FROM categories");
    return response.rows;
  } catch (err) {
    throw new Error(err.message);
  }
};

export default listCategoryService;
