import { ObjectID } from "bson";
import { connectToDatabase } from "../../../../util/mongodb";
export default async (req, res) => {
  const { db } = await connectToDatabase();
  const { id } = req.query;
  
    const users = await db
      .collection("userData")
      .find({ username: id })
      .toArray()
      .catch((e) => res.json([{ error: true }]));
    users.images = [];
    users.profiles = [];
    users.usernames = [];
    users.passwords = [];
    if (users.length != 0) {
      res.json(users);
    } 
   else {
    res.json([{ error: true }]);
  }
};
