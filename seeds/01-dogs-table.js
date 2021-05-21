
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('dogs').del()
    .then(function () {
      // Inserts seed entries
      return knex('dogs').insert([
        {id: 1, name: 'Bixy', breed: "Husky", age: "2"},
        {id: 2, name: 'Tommy', breed: "German Shepard", age: "3" },
        {id: 3, name: 'Bela', breed: "Golden Retriever", age: "1"}
      ]);
    });
};
