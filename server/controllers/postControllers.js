import postModel from '../models/postModel.js';

export const get_post = async (req, res) => {
  const posts = await postModel.find();
  try {
    res.status(200).json(posts);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const create_post = (req, res) => {
  const post = req.body;
  const newPost = new postModel(post);
  try {
    newPost.save();
    res.status(200).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
