/*

  Define a generic function filterArray<T>(arr: T[], predicate: (item: T) => boolean): T[] that filters an array based on a predicate function.
  Use this function to filter an array of numbers and return only even numbers.
  Use the same function to filter an array of User objects and return users whose email includes "@company.com".

  Export the filterArray function so that the code can be tested in the test file.
*/

type User = {
  id: number;
  name: string;
  email: string;
  role: string | undefined;
};

function check<T>(item: T): boolean {
  if (typeof item === 'number') {
    return item % 2 === 0 ? true : false;
  }
  if ((item as User).email) {
    return (item as User).email.includes('@company.com');
  }
  return true;
}

export function filterArray<T>(arr: T[], predicate: (item: T) => boolean): T[] {
  return arr.filter((item) => predicate(item));
}

// const nmbers = [1, 2, 3, 4, 5];

// const userList: User[] = [
//   { id: 1, name: 'mirza', email: 'themirza0001@gmail.com', role: 'SDE' },
//   { id: 2, name: 'atif', email: 'themirza0001@company.com', role: 'backend' },
// ];

// console.log(nmbers);

// console.log(filterArray(nmbers, check));

// console.log(filterArray(userList, check));
