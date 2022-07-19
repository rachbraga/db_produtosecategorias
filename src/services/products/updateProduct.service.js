import database from "../../database";

const updateProductService = async (id, data) => {
  try {
    const uId = await database.query("SELECT * FROM products WHERE id=$1", [
      id,
    ]);

    if (uId.rowCount === 0) {
      throw "Product ID not found.";
    }

    const response = await database.query(
      "UPDATE products SET name=$1, price=$2, category_id=$3 WHERE id=$4 RETURNING *",
      [
        data.name || uId.rows[0].name,
        data.price || uId.rows[0].price,
        data.category_id || uId.rows[0].category_id,
        id,
      ]
    );

    return response.rows[0];
  } catch (error) {
    throw new Error(error);
  }
};

export default updateProductService;
