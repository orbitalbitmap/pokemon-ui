module.exports = {
  up: async queryInterface => queryInterface.bulkInsert('Types', [
    { name: 'Bug' },
    { name: 'Dark' },
    { name: 'Dragon' },
    { name: 'Electric' },
    { name: 'Fairy' },
    { name: 'Fighting' },
    { name: 'Fire' },
    { name: 'Flying' },
    { name: 'Ghost' },
    { name: 'Grass' },
    { name: 'Ground' },
    { name: 'Ice' },
    { name: 'Normal' },
    { name: 'Poison' },
    { name: 'Psychic' },
    { name: 'Rock' },
    { name: 'Steel' },
    { name: 'Water' },
  ]),

  down: async queryInterface => queryInterface.bulkDelete('Types'),
}
