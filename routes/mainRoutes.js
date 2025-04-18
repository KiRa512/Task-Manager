const router = require('express').Router();
const tasksController = require('../controllers/tasksController')

router.get('/',tasksController.getAllTask);
router.get('/:id',tasksController.getTask);
router.post('/',tasksController.createTask);
router.patch('/:id',tasksController.updateTask);
router.delete('/:id',tasksController.deleteTask);


module.exports = router;
