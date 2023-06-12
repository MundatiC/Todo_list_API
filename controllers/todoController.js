const todoTasks = require('../data');

module.exports = {
  home: (req, res) => {
    res.send('Welcome to the todo list');
  },

  getAllTodos: (req, res) => {
    res.json({
      success: true,
      message: "Fetched todos successfully",
      data: todoTasks
    });
  },

  createTodo: (req, res) => {
    const newTodo = req.body;
    todoTasks.push(newTodo);

    res.status(201).json({
      success: true,
      message: "Added the todo successfully",
      data: todoTasks
    });
  },

  updateTodo: (req, res) => {
    const { taskId } = req.params;
    const updatedTodo = req.body;

    const todoIndex = todoTasks.findIndex(todo => todo.id === taskId);

    if (todoIndex === -1) {
      return res.status(404).json({
        success: false,
        message: 'Todo not found'
      });
    }

    todoTasks[todoIndex] = { ...todoTasks[todoIndex], ...updatedTodo };

    res.json({
      success: true,
      message: 'Todo updated successfully',
      data: todoTasks[todoIndex]
    });
  },

  deleteTodo: (req, res) => {
    const { taskId } = req.params;

    const todoIndex = todoTasks.findIndex(todo => todo.id === taskId);

    if (todoIndex === -1) {
      return res.status(404).json({
        success: false,
        message: 'Todo not found'
      });
    }

    todoTasks.splice(todoIndex, 1);

    res.json({
      success: true,
      message: 'Todo deleted successfully',
      data: todoTasks
    });
  },

  getSingleTodo: (req, res) => {
    const { taskId } = req.params;

    const todoIndex = todoTasks.findIndex(todo => todo.id === taskId);

    if (todoIndex === -1) {
      return res.status(404).json({
        success: false,
        message: 'Todo not found'
      });
    }

    res.json({
      success: true,
      message: 'Todo retrieved successfully',
      data: todoTasks[todoIndex]
    });
  }
};