import { client } from "..";
/*
 * Function should insert a new todo for this user
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function createTodo(
  userId: number,
  title: string,
  description: string
) {
  try {
    const response = await client.query(
      `INSERT INTO todos (user_id, title, description) VALUES ($1, $2, $3) RETURNING *`,
      [userId, title, description]
    );
    console.log(response)
    return response.rows[0];
  } catch (error) {
    console.error("Could not create todo", error);
  }
}
/*
 * mark done as true for this specific todo.
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function updateTodo(todoId: number) {
  try {
    const response = await client.query(
      `UPDATE todos SET done = true WHERE id = $1 RETURNING *`,
      [todoId]
    );
    console.log(response)
    return response.rows[0];
  } catch (error) {
    console.error("Error while updating", error);
  }
}

/*
 *  Get all the todos of a given user
 * Should return an array of todos
 * [{
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }]
 */
export async function getTodos(userId: number) {
  try {
    const response = await client.query(
      `SELECT * FROM todos WHERE user_id = $1`, [userId]
    );
    console.log(response)
    return response.rows;
  } catch (error) {
    console.error("some error occured", error);
  }
}
