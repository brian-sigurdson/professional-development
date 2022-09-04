function greet(fullName) {
    fullName.forEach(element => {
        console.log("Hello " + element);
    });
}

function func2(fullName, callback) {
    callback(fullName.split(" "));
}

func2("Alan Barb Carl Diane", greet);