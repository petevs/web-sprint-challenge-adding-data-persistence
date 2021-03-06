// build your `Project` model here
const db = require('../../data/dbConfig')

const toBoolean = (num) => {
    if(num === 0 || null){
        return false
    } if(num === 1){
        return true
    }
}


const getProjects = async () => {
    const projects = await db('projects')
        .select('*')
    return projects.map(project => { return {
        ...project,
        project_completed: toBoolean(project.project_completed)
    }})
}


const addProject = async (project) => {
    
    const [id] = await db('projects')
        .insert({
            project_name: project.project_name,
            project_description: project.project_description,
            project_completed: project.project_completed
        })

    const result = await db('projects')
    .select('*')
    .where('project_id', id)
    .first()

    return {...result, project_completed: toBoolean(result.project_completed)}

}

module.exports = {
    getProjects,
    addProject
}