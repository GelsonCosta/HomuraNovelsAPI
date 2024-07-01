const express = require('express');
const router = express.Router();
const chapterController = require('../controllers/chapter.controller');
const authMiddleware = require('../middlewares/auth.middleware');

/**
 * @swagger
 * /api/chapters:
 *   post:
 *     summary: Cria um novo capítulo
 *     tags: [Capitulos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - content
 *               - webnovelId
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *               webnovelId:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Capítulo criado com sucesso
 *       400:
 *         description: Erro na criação do capítulo
 */
router.post('/', authMiddleware.verifyToken, chapterController.create);

/**
 * @swagger
 * /api/chapters/{id}:
 *   get:
 *     summary: Obtém um capítulo pelo ID
 *     tags: [Capitulos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do capítulo
 *     responses:
 *       200:
 *         description: Capítulo encontrado com sucesso
 *       404:
 *         description: Capítulo não encontrado
 */
router.get('/:id', authMiddleware.verifyToken, chapterController.findOne);

/**
 * @swagger
 * /api/chapters:
 *   get:
 *     summary: Obtém todos os capítulos
 *     tags: [Capitulos]

 *     responses:
 *       200:
 *         description: Lista de capítulos
 *       500:
 *         description: Erro ao buscar capítulos
 */
router.get('/', authMiddleware.verifyToken, chapterController.findAll);

/**
 * @swagger
 * /api/chapters/{id}:
 *   put:
 *     summary: Atualiza um capítulo pelo ID
 *     tags: [Capitulos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do capítulo
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *     responses:
 *       200:
 *         description: Capítulo atualizado com sucesso
 *       404:
 *         description: Capítulo não encontrado
 *       500:
 *         description: Erro ao atualizar capítulo
 */
router.put('/:id', authMiddleware.verifyToken, chapterController.update);

/**
 * @swagger
 * /api/chapters/{id}:
 *   delete:
 *     summary: Deleta um capítulo pelo ID
 *     tags: [Capitulos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do capítulo
 *     responses:
 *       200:
 *         description: Capítulo deletado com sucesso
 *       404:
 *         description: Capítulo não encontrado
 *       500:
 *         description: Erro ao deletar capítulo
 */
router.delete('/:id', authMiddleware.verifyToken, chapterController.delete);

module.exports = router;
