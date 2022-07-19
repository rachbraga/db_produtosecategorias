import database from "../../database";

const selectProductService = async (product_id) => {
  try {
    const response = await database.query(
      "SELECT * FROM products WHERE id= $1",
      [product_id]
    );

    if (!response.rows.length) {
      throw new Error("Course not found.");
    }

    return response.rows[0];
  } catch (err) {
    throw new Error(err.message);
  }
};

export default selectProductService;
