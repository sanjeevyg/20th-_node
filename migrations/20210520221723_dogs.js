
exports.up = function(knex) {
    return knex.schema.createTable("dogs", dogs => {
        dogs.increments()
        dogs.string("name")
        dogs.string("breed")
        dogs.string("age")
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("dogs")
  
};
