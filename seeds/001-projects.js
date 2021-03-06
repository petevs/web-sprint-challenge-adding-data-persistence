
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {project_id: 1, project_name: 'project one', project_description: null, project_completed: '0'},
        {project_id: 2, project_name: 'project two', project_description: null, project_completed: '0'},
        {project_id: 3, project_name: 'project three', project_description: null, project_completed: '0'},
      ]);
    });
};
