const doctor = (name, specialty, address) => {
    return {
        doctorsName: name,
        specialty: specialty,
        address: address
    }
}

console.log (doctor("ted", "medic", 111))


const pet = (name, breed) => {
    return {
        "pet name": name,
        "pet breed": breed
    }
}

let bowWowKennels = [];

bowWowKennels.push(pet("kat", "cat"))
bowWowKennels.push(pet("dawg", "dog"))
bowWowKennels.push(pet("snek", "snake"))


console.log(bowWowKennels)