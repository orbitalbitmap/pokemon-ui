export default (connection, Sequelize) => connection.define('Pokemons', {
  pokedexNumber: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: Sequelize.STRING, allowNull: false },
  generationNumber: { type: Sequelize.INTEGER, allowNull: false },
  previousEvolutionId: { type: Sequelize.INTEGER, allowNull: true },
  nextEvolutionId: { type: Sequelize.INTEGER, allowNull: true },
  slug: { type: Sequelize.STRING, allowNull: false },
  description1: { type: Sequelize.STRING, allowNull: false },
  description2: { type: Sequelize.STRING, allowNull: false },
  isProtected: { type: Sequelize.TINYINT, default: 0 },
}, {
  defaultScope: {
    attributes: { exclude: ['deletedAt'] },
  },
}, {
  paranoid: true,
})
