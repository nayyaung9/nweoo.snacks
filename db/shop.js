import { nanoid } from "nanoid";

export async function fetchYourShopByUserId(db, userId) {
  return db
    .collection("shops")
    .findOne({ shopOwnerId: userId })
    .then((shop) => shop || null);
}

export async function fetchShopById(db, shopId) {
  return db
    .collection("shops")
    .findOne({
      _id: shopId,
    })
    .then((shop) => shop || null);
}

export async function fetchAllShops(db) {
  return db
    .collection("shops")
    .find()
    .sort({ createdAt: -1 })
    .limit(20)
    .toArray();
}
export async function registerShop(
  db,
  { shopname, phoneNumber, fbLink, shopOwnerId }
) {
  return db
    .collection("shops")
    .insertOne({
      _id: nanoid(12),
      shopname,
      phoneNumber,
      fbLink,
      shopOwnerId,
      isShopVerify: false,
      createdAt: new Date().toString(),
    })
    .then(({ ops }) => ops[0]);
}

export async function updateShop(db, data) {
  return db
    .collection("shops")
    .findOneAndUpdate(
      { _id: data?._id },
      {
        $set: {
          ...data,
        },
      },
      { new: true }
    )
    .then(({ value }) => value);
}

export async function fetchShopsByUnVerify(db) {
 db.collection("shops").find({ isShopVerify: false }).toArray();
}
