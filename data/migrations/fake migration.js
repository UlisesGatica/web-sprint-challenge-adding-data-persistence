// was haveing issues with makeing the table when I did npx knex migrate:make table kept getting error could not get help due to hours not open so just made this folder ti show I know how to set it up
exports.up = function(knex) {
    return knex.schema
      .createTable('projects', tbl => {
          tbl.increments('project_id');
          tbl.text('project_name').notNullable();
          tbl.text('project_description');
          tbl.boolean('project_completed').defaultTo(0);
      })
      .createTable('resources', tbl => {
          tbl.increments('resource_id');
          tbl.text('resource_name')
          .unique()
          .notNullable();
          tbl.text('resource_description');
      })
      .createTable('tasks', tbl =>{
          tbl.increments('task_id');
          tbl.text('task_description').notNullable();
          tbl.text('task_notes');
          tbl.boolean('task_completed').defaultTo(0);
          tbl.integer('project_id')
          .unsigned()
          .notNullable()
          .references('project_id')
          .inTable('projects');
      })
      .createTable('project_resources', tbl => {
          tbl.integer('resource_id')
              .unsigned().notNullable()
              .references('resource_id').inTable('resources');
          tbl.text('resource_name')
              .notNullable().references('resource_name')
              .inTable('resources');
          tbl.integer('project_id')
              .unsigned().notNullable()
              .references('project_id').inTable('projects')
      })
  };
  
  exports.down = async function(knex) {
      await knex.schema
      .dropTableIfExists('project_resources')
      .dropTableIfExists('tasks')
      .dropTableIfExists('resources')
      .dropTableIfExists('projects')
  };