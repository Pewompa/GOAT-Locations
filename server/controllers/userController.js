const IdModel = require('../models/UserModel');

async function getId(req, res) {
  try {
    const data = await IdModel.find({});
    res.status = 201;
    res.json(data);
  } catch (error) {
    res.status = 400;
  }
}

async function postId(req, res) {
  const { googleId } = req.body;
  const id = await IdModel.findOne({ googleId: googleId });
  if (id) {
    id.score = id.score + 1;
    await id.save();
    return res.send(id);
  }
  try {
    const newId = new IdModel({
      googleId: req.body.googleId,
    });
    await newId.save();
    res.status = 201;
    res.send(newId);
  } catch (error) {
    console.log(error);
    res.status = 400;
  }
}
async function removeId(req, res) {
  try {
    const { googleId } = req.body;
    const deletedId = await IdModel.findOneAndDelete({ googleId: googleId });
    res.status = 201;
    res.send(deletedId);
  } catch (error) {
    console.log(error);
    res.status = 400;
  }
}

async function removeCollection(req, res){
  try {
    const deletedId = await IdModel.collection.drop();
    res.status = 201;
    res.send(deletedId);
  } catch (error) {
    console.log(error);
    res.status = 400;
  }
}

module.exports = { getId, postId, removeId, removeCollection };
