// build your `Task` model here
const db = require('../../data/dbConfig')

//add a new task and return newly created task
const addTask = async (task) => {
    
    const [id] = await db('tasks')
        .insert({
            task_description: task.task_description,
            task_notes: task.task_notes,
            task_completed: task.task_completed,
            project_id: task.project_id
        })

    return db('tasks')
        .select('*')
        .where('task_id', id)
        .first()

}

//Get all tasks
const getTasks = () => {
    return db('tasks')
        .select('*')
}

module.exports = {
    getTasks,
    addTask
}