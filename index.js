function introduction (name) {
    console.log(`Hi, my name is ${name}.`);
}

function introductionWithlanguage(name, language) {
    console.log(`Hi, my name is ${name} and I am learning to program in ${language}.`);
}

function introductionWithlanguageOptional(name, language = "JavaScript") {
    console.log(`Hi, my name is ${name} and I am learning to program in ${language}.`);
}

/*introduction("Donna");
introductionWithlanguage("Bob","Python");
introductionWithlanguageOptional("Bob","C++");
*/