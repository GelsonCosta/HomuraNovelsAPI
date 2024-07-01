const Comment = require('../models/comment.model');
const Chapter = require('../models/chapter.model');

exports.create = async (req, res) => {
  try {
    const {nome, description, chapterId  } = req.body;
    const chapter = await Chapter.findByPk(chapterId);

    if (!chapter) {
      return res.status(404).json({ error: 'Capítulo não encontrado' });
    }

    const comment = await Comment.create({
      description,
      nome,
      chapterId
    });
    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.findAll = async (req, res) => {
  try {
    const comments = await Comment.findAll();
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.findOne = async (req, res) => {
  try {
    const comment = await Comment.findByPk(req.params.id);
    if (!comment) {
      return res.status(404).json({ error: 'Comentário não encontrado.' });
    }
    res.status(200).json(comment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const { description } = req.body;
    const [updated] = await Comment.update(
      { description},
      { where: { id: req.params.id } }
    );
    if (updated === 0) {
      return res.status(404).json({ error: 'Comentário não encontrado.' });
    }
    const updatedComment = await Comment.findByPk(req.params.id);
    res.status(200).json(updatedComment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const deleted = await Comment.destroy({
      where: { id: req.params.id }
    });
    if (deleted === 0) {
      return res.status(404).json({ error: 'Comentário não encontrado.' });
    }
    res.status(200).json({ message: 'Comentário deletado com sucesso.' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
