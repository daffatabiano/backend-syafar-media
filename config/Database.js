import { Sequelize } from 'sequelize';

const db = new Sequelize('travel_umroh_db', 'root', '', {
  dialect: 'mysql',
  host: 'localhost',
});

(async () => {
  await db.sync();
})();

export default db;
