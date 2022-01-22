exports.seed = function(knex, Promise) {
    return knex('tasks').insert([   
      { task_description: 'make a table', task_notes: "use knex", task_completed: false, project_id:1},
      { task_description: 'make a table', task_notes: "use sql" , task_completed: false, project_id:2}
    ]);
  };