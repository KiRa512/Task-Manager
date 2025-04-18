const Task = require('../models/task');
const asyncWrapper = require('../middleware/async');
exports.getAllTask = asyncWrapper(async (req, res) => {
    const tasks = await Task.find();
    res.status(200).json({ tasks });
});

exports.getTask = asyncWrapper(async (req, res) => {
    const task = await Task.findOne({ _id: req.params.id });
    if (!task) {
        return res.status(404).json({ msg: 'Task not found' });
    }
    res.status(200).json({ task });
});

exports.createTask = asyncWrapper(async (req, res) => {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
});

exports.updateTask = asyncWrapper(async (req, res) => {
    const task = await Task.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true }
    );
    if (!task) {
        return res.status(404).json({ msg: 'Task not found' });
    }
    res.status(200).json({ task });
});

exports.deleteTask = asyncWrapper(async (req, res) => {
    const task = await Task.findOneAndDelete({ _id: req.params.id });
    if (!task) {
        return res.status(404).json({ msg: 'Task not found' });
    }
    res.status(200).json({ msg: 'Task deleted successfully' });
});
