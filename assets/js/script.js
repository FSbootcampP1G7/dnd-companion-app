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
        const informationArea = document.getElementById('information');
        const name = document.createElement('h3');
        const prof = document.createElement('li');
        const lang = document.createElement('li');


        name.textContent = 'Race: ' + human.index;
        prof.textContent = 'Proficiencies: ' + human.starting_proficiencies.length;
        lang.textContent = 'Languages: ' + human.languages[0].index;

        //rearrange append information based on changed variables above
        informationArea.append(name);
        name.append(prof);
        name.append(lang);
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

        name.textContent = 'Race: ' + dwarf.index;
        prof.textContent = 'Proficiencies: ' + dwarf.starting_proficiencies.length;
        lang.textContent = 'Languages: ' + dwarf.languages[0].index + ', ' + dwarf.languages[1].index

        //rearrange append information based on changed variables above
        informationArea2.append(name);
        name.append(prof);
        name.append(lang);
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

        name.textContent = 'Race: ' + elf.index;
        prof.textContent = 'Proficiencies: ' + elf.starting_proficiencies.length;
        lang.textContent = 'Languages: ' + elf.languages[0].index + ', ' + elf.languages[1].index

        //rearrange append information based on changed variables above
        informationArea3.append(name);
        name.append(prof);
        name.append(lang);
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
        const informationArea4 = document.getElementById('information4');
        const name = document.createElement('h3');
        const prof = document.createElement('li');
        const lang = document.createElement('li');

        name.textContent = 'Race: ' + halfling.index;
        prof.textContent = 'Proficiencies: ' + halfling.starting_proficiencies.length;
        lang.textContent = 'Languages: ' + halfling.languages[0].index + ', ' + halfling.languages[1].index

        //rearrange append information based on changed variables above
        informationArea4.append(name);
        name.append(prof);
        name.append(lang);
    })
}


const classSpells = function() {
    fetch("https://www.dnd5eapi.co/api/classes/wizard/spells")
    .then(function(response) {
         return response.json()
    })
    .then(function(Spells) {
        console.log("After json", Spells);

        //change variable def based on layout of future HTML
        const informationArea5 = document.getElementById('information5');
        const name = document.createElement('h3');
        const prof = document.createElement('li');
        const lang = document.createElement('li');

        // name.textContent = 'Race: ' + halfling.index;
        // prof.textContent = 'Proficiencies: ' + halfling.starting_proficiencies.length;
        // lang.textContent = 'Languages: ' + halfling.languages[0].index + ', ' + halfling.languages[1].index

        //rearrange append information based on changed variables above
        informationArea5.append(name);
        name.append(prof);
        name.append(lang);
    })
}


const classSpecificInfo = function() {
    fetch("https://www.dnd5eapi.co/api/classes/wizard/levels")
    .then(function(response) {
         return response.json()
    })
    .then(function(levels) {
        console.log("After json", levels);

        //change variable def based on layout of future HTML 
        const informationArea5 = document.getElementById('information5');
        const level = document.createElement('h3');
        const cantrips = document.createElement('li');
        const spellsByLevel1 = document.createElement('li');
        const spellsByLevel2 = document.createElement('li');
        const spellsByLevel3 = document.createElement('li');
        const arcaneRecovery = document.createElement('li');

        

        // for (i = 0; i < 5; i++) {
        level.textContent = 'Wizard Level: ' + levels[0].level;
        console.log(level.textContent);
        // cantrips.textContent = "Cantrips for this level: " + levels.[0].spellcasting.cantrips_known;
        // spellsByLevel1.textContent = "Level 1 spell slots: " + levels.[0].spellcasting.spell_slots_level_1;
        // spellsByLevel2.textContent = "Level 2 spell slots: " + levels.[0].spellcasting.spell_slots_level_2;
        // spellsByLevel3.textContent = "Level 3 spell slots: " + levels.[0].spellcasting.spell_slots_level_3;
        // arcaneRecovery.textContent = "Arcane Recovery: " + levels.[0].class_specific.arcane_recovery_levels;
        // }

        //rearrange append information based on changed variables above
        informationArea5.append(level);
        //level.append(level);
        level.append(cantrips);
        level.append(spellsByLevel1);
        level.append(spellsByLevel2);
        level.append(spellsByLevel3);

    })
}


buttonEL.addEventListener('click', humanStats);
buttonEL.addEventListener('click', dwarfStats);
buttonEL.addEventListener('click', elfStats);
buttonEL.addEventListener('click', halflingStats);
buttonEL.addEventListener('click', classSpells);
// buttonEL.addEventListener('click', humanStats);
// buttonEL.addEventListener('click', dwarfStats);
// buttonEL.addEventListener('click', elfStats);
// buttonEL.addEventListener('click', halflingStats);


//////////API for footer/////////

const riddleButton = document.getElementById('riddle');
const jokePost = document.getElementById('jokePost');
const answerButton = document.getElementById('answer');
const jokeAnswer = document.getElementById('jokeAnswer');

const riddlePost = function(){
    fetch('https://official-joke-api.appspot.com/random_joke')
    .then(function(response){
        return response.json()
    })
    .then(function(joke){
        console.log("Jokes here", joke);
        const jokeArea = document.getElementById('jokePost');
        const displayJoke = document.createElement('h3');
        displayJoke.textContent =  joke.setup;
        jokeArea.append(displayJoke);
    })
}
const answerPost = function(){
        return(function(answer){
        console.log("Jokes here", answer);
        const answerArea = document.getElementById('jokeAnswer');
        const displayAnswer= document.createElement('h3');
        displayAnswer.textContent =  answer.punchline;
        answerArea.append(displayAnswer);
    })
}
riddleButton.addEventListener('click', riddlePost);
answerButton.addEventListener('click', answerPost);








