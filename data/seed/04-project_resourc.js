exports.seed = function(knex, Promise) {
    return knex('project_resources').insert([   
      {resource_id: 1, resource_name:'knex', project_id: 1},
      {resource_id: 2, resource_name:'sql', project_id: 2 }
    ]);
};