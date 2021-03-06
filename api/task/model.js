// build your `Task` model here
const db = require('../../data/dbConfig')

const toBoolean = (num) => {
    if(num === 0 || null){
        return false
    } if(num === 1){
        return true
    }
}

const toInt = (value) => {
    if(value === true || value === 1 || value === '1'){
        return 1
    }
    else {
        return 0
    }
}

//add a new task and return newly created task
const addTask = async (task) => {

    const [id] = await db('tasks')
        .insert({
            task_description: task.task_description,
            task_notes: task.task_notes,
            task_completed: toInt(task.task_completed),
            project_id: task.project_id
        })

    const result = await db('tasks')
        .select('*')
        .where('task_id', id)
        .first()

    return {
        ...result,
        task_completed: toBoolean(result.task_completed)
    }

}

//Get all tasks
const getTasks = async () => {
    const tasks = await db({t: 'tasks'})
        .join({p: 'projects'}, 'p.project_id', 't.project_id')
        .select(
            't.task_id',
            't.task_description',
            't.task_notes',
            't.task_completed',
            'p.project_name',
            'p.project_description'
        )
    return tasks.map(task => { return {
        ...task,
        task_completed: toBoolean(task.task_completed)
    }})
}

module.exports = {
    getTasks,
    addTask
}