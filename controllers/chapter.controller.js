const Chapter = require('../models/chapter.model');
const Webnovel = require('../models/webnovel.model');
const Comment = require('../models/comment.model');

exports.create = async (req, res) => {
  try {
    const { title, content , webnovelId} = req.body;
    const webnovel = await Webnovel.findByPk(webnovelId);

    if (!webnovel) {
      return res.status(404).json({ error: 'Webnovel não encontrado' });
    }

    const chapter = await Chapter.create({
      title,
      content,
      webnovelId,
    });
    res.status(201).json(chapter);
  } catch (error) {
    res.status(500).json({ error: 'Falha ao criar capítulo' });
  }
};

exports.findAll = async (req, res) => {
  try {
    const chapters = await Chapter.findAll({
      include: [
        Comment
      ]
    });
    res.status(200).json(chapters);
  } catch (error) {
    res.status(500).json({ error: 'Falha ao buscar capítulos' });
  }
};

exports.findOne = async (req, res) => {
  try {
    const chapter = await Chapter.findByPk(req.params.id, {
      include: [
       Comment
      ]
    });
    if (!chapter) {
      return res.status(404).send({ message: 'Capitulo não encontrado.' });
    }
    res.status(200).send(chapter);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const { title, content } = req.body;
    const [updated] = await Chapter.update(
      { title, content},
      { where: { id: req.params.id } }
    );
    if (updated === 0) {
      return res.status(404).json({ error: 'Capítulo não encontrado' });
    }
    const updatedChapter = await Chapter.findByPk(req.params.id);
    res.status(200).json(updatedChapter);
  } catch (error) {
    res.status(500).json({ error: 'Falha ao atualizar capítulo' });
  }
};

exports.delete = async (req, res) => {
  try {
    const deleted = await Chapter.destroy({
      where: { id: req.params.id }
    });
    if (deleted === 0) {
      return res.status(404).json({ error: 'Capítulo não encontrado' });
    }
    res.status(200).json({ message: 'Capítulo deletado com sucesso.' });
  } catch (error) {
    res.status(500).json({ error: 'Falha ao deletar capítulo' });
  }
};
