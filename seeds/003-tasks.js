
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {task_id: 1, task_description: 'task one', task_notes: null, task_completed: '0', project_id: 1},
        {task_id: 2, task_description: 'task two', task_notes: null, task_completed: '0', project_id: 1},
        {task_id: 3, task_description: 'task three', task_notes: null, task_completed: '0', project_id: 2},
        {task_id: 4, task_description: 'task four', task_notes: null, task_completed: '0', project_id: 2},
        {task_id: 5, task_description: 'task five', task_notes: null, task_completed: '0', project_id: 3},
        {task_id: 6, task_description: 'task six', task_notes: null, task_completed: '0', project_id: 3},
        {task_id: 7, task_description: 'task seven', task_notes: null, task_completed: '0', project_id: 3},
      ]);
    });
};
