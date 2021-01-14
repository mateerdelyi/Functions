let dogAge = window.prompt("Hány éves a kutyád?");

function calculateDogYears (dogAge) {
    let humanYears = dogAge * 7;
    console.log("Egy " + dogAge + " éves kutya olyan idős, mint egy " + humanYears + " éves ember.");
}

calculateDogYears(dogAge);