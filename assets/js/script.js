const buttonEL = document.getElementById('clickMe');
const information = document.getElementById('information');

const humanStats = function() {
    fetch('https://www.dnd5eapi.co/api/races/human')
    .then(function(response) {
        return response.json()
    })
    .then(function(human) {
        console.log("After json", human);

        //change variable def based on layout of future HTML
        // to make list will be to create variable for ol then append onto that
        const informationArea = document.getElementById('information');
        const name = document.createElement('h3');
        const prof = document.createElement('li');
        const lang = document.createElement('li');
        const traits = document.createElement('li');


        name.textContent = 'Race: ' + human.name;
        prof.textContent = 'Proficiencies: ' + 'None';
        lang.textContent = 'Languages: ' + human.languages[0].name;
        traits.textContent = 'Traits: None';

        //rearrange append information based on changed variables above
        //also..appends are not working correctly. everything currents get put in an ordered list, and under h3 tag when the h3 only needs to be the "name" variable
        informationArea.append(name);
        name.append(prof);
        name.append(lang);
        name.append(traits);
    })
}

const dwarfStats = function() {
    fetch('https://www.dnd5eapi.co/api/races/dwarf')
    .then(function(response) {
        return response.json()
    })
    .then(function(dwarf) {
        console.log("After json", dwarf);

        //change variable def based on layout of future HTML
        const informationArea2 = document.getElementById('information2');
        const name = document.createElement('h3');
        const prof = document.createElement('li');
        const lang = document.createElement('li');
        const traits = document.createElement('li');

        name.textContent = 'Race: ' + dwarf.name;
        prof.textContent = 'Proficiencies: ' + dwarf.starting_proficiencies[0].name + ', ' + dwarf.starting_proficiencies[1].name + ', ' + dwarf.starting_proficiencies[2].name + ', ' + dwarf.starting_proficiencies[3].name;
        lang.textContent = 'Languages: ' + dwarf.languages[0].name + ', ' + dwarf.languages[1].name;
        traits.textContent = 'Traits: ' + dwarf.traits[0].name + ', ' + dwarf.traits[1].name + ', ' + dwarf.traits[2].name + ', ' + dwarf.traits[3].name; + ', ' + dwarf.traits[4].name;

        //rearrange append information based on changed variables above
        informationArea2.append(name);
        name.append(prof);
        name.append(lang);
        name.append(traits);
    })
}

const elfStats = function() {
    fetch('https://www.dnd5eapi.co/api/races/elf')
    .then(function(response) {
        return response.json()
    })
    .then(function(elf) {
        console.log("After json", elf);

        //change variable def based on layout of future HTML
        const informationArea3 = document.getElementById('information2');
        const name = document.createElement('h3');
        const prof = document.createElement('li');
        const lang = document.createElement('li');
        const traits = document.createElement('li');


        name.textContent = 'Race: ' + elf.name;
        prof.textContent = 'Proficiencies: ' + elf.starting_proficiencies[0].name;
        lang.textContent = 'Languages: ' + elf.languages[0].name + ', ' + elf.languages[1].name;
        traits.textContent = 'Traits: ' + elf.traits[0].name + ', ' + elf.traits[1].name + ', ' + elf.traits[2].name + ', ' + elf.traits[3].name;

        //rearrange append information based on changed variables above
        informationArea3.append(name);
        name.append(prof);
        name.append(lang);
        name.append(traits);
    })
}

const halflingStats = function() {
    fetch('https://www.dnd5eapi.co/api/races/halfling')
    .then(function(response) {
        return response.json()
    })
    .then(function(halfling) {
        console.log("After json", halfling);

        //change variable def based on layout of future HTML
        const informationArea4 = document.getElementById('information2');
        const name = document.createElement('h3');
        const prof = document.createElement('li');
        const lang = document.createElement('li');
        const traits = document.createElement('li')

        name.textContent = 'Race: ' + halfling.name;
        prof.textContent = 'Proficiencies: ' + 'None';
        lang.textContent = 'Languages: ' + halfling.languages[0].name + ', ' + halfling.languages[1].name;
        traits.textContent = 'Traits: ' + halfling.traits[0].name + ', ' + halfling.traits[1].name + ', ' + halfling.traits[2].name;

        //rearrange append information based on changed variables above
        informationArea4.append(name);
        name.append(prof);
        name.append(lang);
        name.append(traits);
    })
}

buttonEL.addEventListener('click', humanStats);
buttonEL.addEventListener('click', dwarfStats);
buttonEL.addEventListener('click', elfStats);
buttonEL.addEventListener('click', halflingStats);