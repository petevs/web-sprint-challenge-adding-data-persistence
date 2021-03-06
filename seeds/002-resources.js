
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {resource_id: 1, resource_name:"resource one", resource_description:null},
        {resource_id: 2, resource_name:"resource two", resource_description:null},
        {resource_id: 3, resource_name:"resource three", resource_description:null},
      ]);
    });
};
