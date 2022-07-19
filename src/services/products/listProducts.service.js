import database from "../../database";

const listProductsService = async () => {
  try {
    const response = await database.query("SELECT * FROM products;");
    return response.rows;
  } catch (err) {
    throw new Error(err.message);
  }
};

export default listProductsService;
