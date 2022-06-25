let result = Math.random();
result *= 5;
result = Math.floor(result);
console.log(result);

// for (let i = 0; i < 10; i++) {
//     result = Math.random();
//     result *= 5;
//     result = Math.floor(result);
//     console.log(result);
// }

switch (result) {
    case 0:
        console.log("You selected 0.");
        break;
    case 1:
        console.log("You selected 1.");
        break;
    case 2:
        console.log("You selected 2.");
        break;
    case 3:
        console.log("You selected 3.");
        break;
    case 4:
        console.log("You selected 4.");
        break;
    case 5:
        console.log("You selected 5.");
        break;
    default:
        console.log("Error");
}