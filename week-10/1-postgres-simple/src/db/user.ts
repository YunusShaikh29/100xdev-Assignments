import { client } from "..";

/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function createUser(
  username: string,
  password: string,
  name: string
) {
  try {
    // await client.connect()
    const response = await client.query(
      `INSERT INTO users (username, password, name) VALUES ($1, $2, $3) RETURNING *`, [username, password, name]
    );
    // await client.end()
    console.log(response)
    return response.rows[0];
  } catch (error) {
    console.error("Error occured during creating the user", error);
  }
}

/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number) {
  try {
    // await client.connect()
    const response = await client.query(`SELECT * FROM users WHERE id = $1`, [userId]);
    // const response = client.query(`SELECT * FROM USERS WHERE id = $1`, [
    //   userId,
    // ]);
    // await client.end()
    console.log(response)
    return response.rows[0];
  } catch (error) {
    console.error("Couldn't find the user with this id", error);
  }
}
