
exports.up = async function(knex) {
    await knex.schema.createTable("project_resources", (table) => {
        table
            .integer('project_id')
            .notNull()
            .references('project_id')
            .inTable('projects')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        table
            .integer('resource_id')
            .notNull()
            .references('resource_id')
            .inTable('resources')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        table.primary(['project_id', 'resource_id'])
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('project_resources')
};
