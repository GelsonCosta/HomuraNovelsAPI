const express = require('express');
const router = express.Router();
const commentController = require('../controllers/comment.controller');
const authMiddleware = require('../middlewares/auth.middleware');

/**
 * @swagger
 * tags:
 *   name: Comentarios
 *   description: API para gerenciar comentários
 * 
 * components:
 *   schemas:
 *     Comment:
 *       type: object
 *       required:
 *         - description
 *         - chapterId
 *         - nome
 *       properties:
 *         description:
 *           type: string
 *         chapterId:
 *           type: integer
 *         nome:
 *           type: string
 * 
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 * 
 * info:
 *   title: API de Comentários
 *   description: API para gerenciar comentários
 *   version: 1.0.0
 * 
 * security:
 *   - bearerAuth: []
 */

/**
 * @swagger
 * /api/comments:
 *   post:
 *     summary: Cria um novo comentário
 *     tags: [Comentarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Comment'
 *     responses:
 *       201:
 *         description: Comentário criado com sucesso
 *       400:
 *         description: Erro na criação do comentário
 */
router.post('/', authMiddleware.verifyToken, commentController.create);

/**
 * @swagger
 * /api/comments/{id}:
 *   put:
 *     summary: Atualiza um comentário pelo ID
 *     tags: [Comentarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do comentário
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               description:
 *                 type: string
 *               nome:
 *                 type: string
 *     responses:
 *       200:
 *         description: Comentário atualizado com sucesso
 *       404:
 *         description: Comentário não encontrado
 *       500:
 *         description: Erro ao atualizar comentário
 */
router.put('/:id', authMiddleware.verifyToken, commentController.update);

/**
 * @swagger
 * /api/comments/{id}:
 *   delete:
 *     summary: Deleta um comentário pelo ID
 *     tags: [Comentarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do comentário
 *     responses:
 *       200:
 *         description: Comentário deletado com sucesso
 *       404:
 *         description: Comentário não encontrado
 *       500:
 *         description: Erro ao deletar comentário
 */
router.delete('/:id', authMiddleware.verifyToken, commentController.delete);

module.exports = router;
