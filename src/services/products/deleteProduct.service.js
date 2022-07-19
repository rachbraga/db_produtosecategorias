import database from "../../database";

const deleteProductService = async (product_id) => {
  try {
    const response = await database.query(
      "SELECT * FROM products WHERE id= $1",
      [product_id]
    );

    if (!response.rows.length) {
      throw new Error("Course not found.");
    }

    await database.query("DELETE FROM products WHERE id = $1", [product_id]);
  } catch (err) {
    throw new Error(err.message);
  }
};

export default deleteProductService;
