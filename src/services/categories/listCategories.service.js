import database from "../../database";

const listCategoriesService = async () => {
  try {
    const res = await database.query("SELECT * FROM categories");

    return res.rows;
  } catch (error) {
    throw new Error(err.message);
  }
};

export default listCategoriesService;
