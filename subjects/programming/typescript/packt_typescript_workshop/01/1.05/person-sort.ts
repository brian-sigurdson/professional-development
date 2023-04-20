interface Person {
  firstName: string;
  lastName: string;
}

let count = 0;

function getFullName (person: Person) {
  count++;
  return `${person.firstName} ${person.lastName}`;
}

const programmers: Person [] = [
  {firstName: 'Donald', lastName: 'Knuth'},
  {firstName: 'Barbara', lastName: 'Liskow'},
  {firstName: 'Lars', lastName: 'Bak'},
  {firstName: 'Guido', lastName: 'VAn Rossum'},
  {firstName: 'Anders', lastName: 'Hejslberg'},
  {firstName: 'Edsger', lastName: 'Dijkstra'},
  {firstName: 'Brandon', lastName: 'Eich'},
];

function naiveSortPersons (persons: Person[]): Person[] {
  return persons.slice().sort((first, second) => {
    const firstFullName = getFullName(first);
    const secondFullName = getFullName(second);
    return firstFullName.localeCompare(secondFullName);
  })
}

function schwartzSortPersons (persons: Person[]): Person[] {
  const tuples: [Person, string][] = persons.map(person => [person, getFullName(person)]);
  tuples.sort((first, second) => first[1].localeCompare(second[1]));
  const result = tuples.map(tuple => tuple[0]);
  return result;
}

count = 0;
const sortedNaive = naiveSortPersons(programmers);

console.log(sortedNaive);
console.log(`When called using the naive approach, the function was called ${count} times.`);

count = 0;
const sortedSchwartz = schwartzSortPersons(programmers);
console.log(sortedSchwartz);
console.log(`When called using the sortedSchwartz approach, the function was called ${count} times.`);