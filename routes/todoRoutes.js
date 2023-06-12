const express = require('express');
const { getAllTodos, home, createTodo, updateTodo, deleteTodo, getSingleTodo } = require('../controllers/todoController');

const router = express.Router();

router.get('/', home);
router.get('/todos', getAllTodos);
router.post('/todos', createTodo);
router.put('/todos/:taskId', updateTodo);
router.delete('/todos/:taskId', deleteTodo);
router.get('/todos/:taskId', getSingleTodo);

module.exports = {
  router
};