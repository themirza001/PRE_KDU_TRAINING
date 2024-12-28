/*
  Create a utility function findById that takes an array of User objects and a number as arguments and returns a User | undefined (if the user with the given ID exists).
  Extend the function to support a new parameter, which specifies if the returned user should include undefined or throw an error. Use TypeScript's never type to represent the error-throwing case.
  Test the function using a sample array of User objects and handle both scenarios (with and without throwing an error).

  Export the function findById so that it can be used in the test file.
*/

type User = {
  id: number;
  name: string;
  email: string;
  role?: string | undefined;
};

export function findById(
  userList: User[],
  id: number,
  flagToThrowError: boolean = false
): User | undefined | never {
  const user = userList.find((curr) => {
    return curr.id === id;
  });

  if (!user && flagToThrowError) {
    throw new Error(`User with ID ${id} not found`);
  }
  return user;
}

// const users: User[] = [
//   { id: '1', name: 'Alice', email: 'alice@example.com', role: 'admin' },
//   { id: '2', name: 'Bob', email: 'bob@example.com', role: 'user' },
//   { id: '3', name: 'Charlie', email: 'charlie@example.com', role: undefined },
//   { id: '4', name: 'Diana', email: 'diana@example.com', role: 'moderator' },
//   { id: '5', name: 'Eve', email: 'eve@example.com', role: 'admin' },
// ];

// try {
//   console.log(findById(users, 6, true));
//   console.log(findById(users, 6, false));
// } catch (e) {
//   console.log(e);
// }
