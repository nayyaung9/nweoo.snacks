import { nanoid } from "nanoid";

export async function fetchAllProducts(db) {
  return db
    .collection("products")
    .find()
    .toArray();
}

export async function createProduct(
  db,
  { title, content, price, social, userId, shopId, productImages }
) {
  return db
    .collection("products")
    .insertOne({
      _id: nanoid(12),
      title,
      content,
      price,
      social,
      userId,
      shopId,
      productImages,
      createdAt: new Date(),
    })
    .then(({ ops }) => ops[0]);
}
