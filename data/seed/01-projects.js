exports.seed = function(knex, Promise) {
    return knex('projects').insert([   
      { project_name: 'node_db1',project_description:'learn to make tables', project_completed: false},
      { project_name: 'node_db2',project_description:'learn to make more tables', project_completed: false }
    ]);
};