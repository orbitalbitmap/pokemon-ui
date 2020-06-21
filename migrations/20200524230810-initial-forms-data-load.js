/* eslint-disable max-len */
module.exports = {
  up: async queryInterface => queryInterface.bulkInsert('Forms', [
    { name: 'Gender' },
    { name: 'Alternate' },
    { name: 'Mega' },
    { name: 'Alolan' },
    { name: 'Galarian' },
    { name: 'Gigantamax' },
  ]),

  down: async queryInterface => queryInterface.bulkDelete('Forms'),
}
