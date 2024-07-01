const express = require('express');
const router = express.Router();
const webnovelController = require('../controllers/webnovel.controller');
const authMiddleware = require('../middlewares/auth.middleware');

/**
 * @swagger
 * /api/webnovels:
 *   get:
 *     summary: Lista todas as webnovels
 *     tags: [Webnovels]
 *     responses:
 *       200:
 *         description: Lista de webnovels
 *       500:
 *         description: Erro no servidor
 */
router.get('/', webnovelController.findAll);

/**
 * @swagger
 * /api/webnovels:
 *   post:
 *     summary: Cria uma nova webnovel
 *     tags: [Webnovels]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - description
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Webnovel criada com sucesso
 *       400:
 *         description: Erro na criação da webnovel
 */
router.post('/', authMiddleware.verifyToken, webnovelController.create);

/**
 * @swagger
 * /api/webnovels/{id}:
 *   put:
 *     summary: Atualiza uma webnovel pelo ID
 *     tags: [Webnovels]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da webnovel
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Webnovel atualizada com sucesso
 *       404:
 *         description: Webnovel não encontrada
 *       500:
 *         description: Erro ao atualizar webnovel
 */
router.put('/:id', authMiddleware.verifyToken, webnovelController.update);

/**
 * @swagger
 * /api/webnovels/{id}:
 *   delete:
 *     summary: Deleta uma webnovel pelo ID
 *     tags: [Webnovels]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da webnovel
 *     responses:
 *       200:
 *         description: Webnovel deletada com sucesso
 *       404:
 *         description: Webnovel não encontrada
 *       500:
 *         description: Erro ao deletar webnovel
 */
router.delete('/:id', authMiddleware.verifyToken, webnovelController.delete);

module.exports = router;
