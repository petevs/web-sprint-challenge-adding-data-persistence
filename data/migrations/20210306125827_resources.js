
exports.up = async function(knex) {
    await knex.schema.createTable("resources", (table) => {
        table.increments("resource_id")
        table.text("resource_name").notNull().unique()
        table.text("resource_description")
    })

};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("resources")
};
