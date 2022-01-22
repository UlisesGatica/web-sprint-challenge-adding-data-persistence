exports.seed = function(knex, Promise) {
    return knex('resources').insert([   
      { resource_name: 'knex', resource_description: "made a table with knex" },
      { resource_name: 'sql', resource_description: "made a table with sql" }
    ]);
  };