import { createConnection, Connection } from 'typeorm';
import { User } from './entity/User';

async function insertUser(conn: Connection) {
  console.log('Inserting a new user into the database...');
  const user = new User();
  user.firstName = 'Timber';
  user.lastName = 'Saw';
  user.age = 25;
  await conn.manager.save(user);
  console.log('Saved a new user with id: ' + user.id);
}

async function listUsers(conn: Connection) {
  console.log('Loading users from the database...');
  const users = await conn.manager.find(User);
  console.log('Loaded users: ', users);
}

createConnection()
  .then(async (connection: Connection) => {
    // await insertUser(connection);
    await listUsers(connection);
  })
  .catch(error => console.log(error));
