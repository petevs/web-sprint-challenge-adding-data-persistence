
exports.up = async function(knex) {
    await knex.schema.createTable("tasks", (table) => {
        table.increments("task_id")
        table.text("task_description").notNull()
        table.text("task_notes")
        table.integer("task_completed").defaultTo(0)
        table
            .integer("project_id")
            .notNull()
            .references("project_id")
            .inTable("projects")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
    })

};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("tasks")
};
