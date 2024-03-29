import database from "../../database";

const showOneCategoryProductService = async (category_id) => {
  try {
    const response = await database.query(
      "SELECT p.name, p.price, c.name category FROM products p INNER JOIN categories c ON c.id = p.category_id WHERE p.category_id = $1",
      [category_id]
    );

    if (!response.rows.length) {
      throw new Error("Not found any course with this id");
    }

    return response.rows;
  } catch (err) {
    throw new Error(err.message);
  }
};

export default showOneCategoryProductService;
