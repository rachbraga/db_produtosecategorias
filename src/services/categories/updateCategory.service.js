import database from "../../database";

const updateCategoryService = async (id, newCategorie) => {
  try {
    const response = await database.query(
      `SELECT * FROM categories WHERE id= $1`,
      [id]
    );

    if (response.rowCount === 0) {
      throw "usuario não encontrado";
    }
    const update = await database.query(
      ` UPDATE categories SET name = $1 WHERE id = $2 RETURNING *;`,
      [newCategorie, id]
    );

    return {
      message: "Category updated",
      category: update.rows[0],
    };
  } catch (error) {
    throw new Error(error);
  }
};

export default updateCategoryService;
