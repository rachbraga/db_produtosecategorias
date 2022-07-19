import database from "../../database";

const listACategoryService = async (id) => {
  try {
    const response = await database.query(
      `SELECT * FROM categories WHERE id=$1`,
      [id]
    );
    return response.rows[0];
  } catch (error) {
    throw new Error(error);
  }
};

export default listACategoryService;
