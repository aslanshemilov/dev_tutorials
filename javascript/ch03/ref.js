var animal = {
    genus: "corvus",
    species: "corvax",
    commonName: "raven",
    callType: "squawky", //there is a deliberate bug, removed for convenience
    quote: "Nevermore",
    maxOffspring: 5,
    noisy: true,
    deadly: false
};

var animal2 = animal;

//Bonus: make a copy of an object safely
animal2 = JSON.parse(JSON.stringify(animal));

//Once this copying is done, we can change animal2 to whatever we want
//animal and animal2 are now two different objects