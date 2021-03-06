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
    return db({t: 'tasks'})
        .join({p: 'projects'}, 'p.project_id', 't.project_id')
        .select(
            't.task_id',
            't.task_description',
            't.task_notes',
            't.task_completed',
            'p.project_name',
            'p.project_description'
        )
}

module.exports = {
    getTasks,
    addTask
}