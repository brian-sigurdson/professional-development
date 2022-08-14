// skipping the prototype stuff

class Animal {
    #name;
    #sound;
    
    constructor(name, sound) {
        this.#name = name;
        this.#sound = sound;
    }

    get theName() {
        return this.#name;
    }

    makeSound() {
        console.log(this.#sound);
    }
}

class Bird extends Animal {
    #canFly;

    constructor(name, sound, canFly) {
        super(name, sound);
        this.#canFly = canFly;
    }

    get canIFly() {
        return this.#canFly;
    }
}

let bird = new Bird("bird", "tweet", true);
console.log("Can I fly? " + bird.canIFly);
console.log("What is my name? " + bird.theName);
bird.makeSound();