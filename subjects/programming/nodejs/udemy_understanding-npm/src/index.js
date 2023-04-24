const semver = require("semver");

// console.log(semver.valid('1.2.3'));
// console.log(semver.valid('12.3'));
// console.log(semver.valid('1.2.3-beta.10'));
// console.log(semver.gt('1.2.3', '9.8.7'));
// console.log(semver.lt('1.2.3', '9.8.7'));
// console.log(semver.valid(semver.coerce('v2')));
// console.log(semver.coerce('v2'));
// console.log(semver.coerce('v2').raw);

// const range = new semver.Range("^2.22.2");
// console.log(range);
// console.log(semver.satisfies("2.2.2",range));

console.log(semver.inc("1.4.3", "patch"));