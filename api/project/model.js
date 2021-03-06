// build your `Project` model here
const db = require('../../data/dbConfig')

const getProjects = () => {
    return db('projects')
        .select('*')
}


const addProject = async (project) => {
    
    const [id] = await db('projects')
        .insert({
            project_name: project.project_name,
            project_description: project.project_description,
            project_completed: project.project_completed
        })

    return db('projects')
        .select('*')
        .where('project_id', id)
        .first()

}

module.exports = {
    getProjects,
    addProject
}