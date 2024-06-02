const buttonEL = document.getElementById('clickMe');
const information = document.getElementById('information');
const raceHuman = document.getElementById('raceOne');
const raceDwarf = document.getElementById('raceTwo');
const raceElf = document.getElementById('raceThree');
const raceHalfling = document.getElementById('raceFour');
const classFighter = document.getElementById('classOne');
const classBarbarian = document.getElementById('classTwo');
const classWizard = document.getElementById('classThree');
const classRanger = document.getElementById('classFour');
const submitBtn = document.getElementById('modelSubmitBtn');

let characterObject = {
    name: '',
    prof: '',
    lang: '',
    traits: ''
} 


const humanStats = function() {
////////RACE STATS//////////////

const humanStats = function(characterName) {
    fetch('https://www.dnd5eapi.co/api/races/human')
    .then(function(response) {
        return response.json()
    })
    .then(function(human) {
        console.log("After json", human);

        // console.log('character name', typeof characterName);
        
        const name = document.querySelector('.race');
        const abilities = document.querySelector('.attributesList');
        const prof = document.createElement('li');
        const lang = document.createElement('li');
        const traits = document.createElement('li');
        const charName = document.querySelector('.name');

        characterObject.name = human.name
        characterObject.prof = human.starting_proficiencies.length
        characterObject.lang = human.languages[0]
        characterObject.traits = human.traits.length
        console.log('characterObject', characterObject);
        localStorage.setItem(characterName, JSON.stringify(characterObject))
        console.log('json human name', JSON.parse(localStorage.getItem(characterObject.name)))

        name.textContent = 'Race: ' + human.name;
        prof.textContent = 'Proficiencies: None';
        lang.textContent = 'Languages: ' + human.languages[0].name;
        traits.textContent = 'Traits: None';
        charName.textContent = 'Character Name: ' + characterName;

        abilities.append(prof);
        abilities.append(lang);
        abilities.append(traits);
    })
}

const dwarfStats = function(characterName) {
    fetch('https://www.dnd5eapi.co/api/races/dwarf')
    .then(function(response) {
        return response.json()
    })
    .then(function(dwarf) {
        console.log("After json", dwarf);

        const name = document.querySelector('.race');
        const abilities = document.querySelector('.attributesList');
        const prof = document.createElement('li');
        const lang = document.createElement('li');
        const traits = document.createElement('li');
        const charName = document.querySelector('.name');
        
        characterObject.name = dwarf.name
        characterObject.prof = dwarf.starting_proficiencies.length
        characterObject.lang = dwarf.languages[0]
        characterObject.traits = dwarf.traits.length
        console.log('characterObject', characterObject);
        localStorage.setItem(characterName, JSON.stringify(characterObject))
        console.log('json dwarf name', JSON.parse(localStorage.getItem(characterObject.name)))

        name.textContent = 'Race: ' + dwarf.name;
        prof.textContent = 'Proficiencies: ' + dwarf.starting_proficiencies[0].name + ', ' + dwarf.starting_proficiencies[1].name + ', ' + dwarf.starting_proficiencies[2].name + ', ' + dwarf.starting_proficiencies[3].name;
        lang.textContent = 'Languages: ' + dwarf.languages[0].name + ', ' + dwarf.languages[1].name;
        traits.textContent = 'Traits: ' + dwarf.traits[0].name + ', ' + dwarf.traits[1].name + ', ' + dwarf.traits[2].name + ', ' + dwarf.traits[3].name; + ', ' + dwarf.traits[4].name;
        charName.textContent = 'Character Name: ' + characterName;

        abilities.append(prof);
        abilities.append(lang);
        abilities.append(traits);
    })
}

const elfStats = function(characterName) {
    fetch('https://www.dnd5eapi.co/api/races/elf')
    .then(function(response) {
        return response.json()
    })
    .then(function(elf) {
        console.log("After json", elf);

        const name = document.querySelector('.race');
        const abilities = document.querySelector('.attributesList');
        const prof = document.createElement('li');
        const lang = document.createElement('li');
        const traits = document.createElement('li');
        const charName = document.querySelector('.name');

        characterObject.name = elf.name
        characterObject.prof = elf.starting_proficiencies.length
        characterObject.lang = elf.languages[0]
        characterObject.traits = elf.traits.length
        console.log('characterObject', characterObject);
        localStorage.setItem(characterName, JSON.stringify(characterObject))
        console.log('json elf name', JSON.parse(localStorage.getItem(characterObject.name)))

        name.textContent = 'Race: ' + elf.name;
        prof.textContent = 'Proficiencies: ' + elf.starting_proficiencies[0].name;
        lang.textContent = 'Languages: ' + elf.languages[0].name + ', ' + elf.languages[1].name;
        traits.textContent = 'Traits: ' + elf.traits[0].name + ', ' + elf.traits[1].name + ', ' + elf.traits[2].name + ', ' + elf.traits[3].name;
        charName.textContent = 'Character Name: ' + characterName;
        
        abilities.append(prof);
        abilities.append(lang);
        abilities.append(traits);
    })
}

const halflingStats = function(characterName) {
    fetch('https://www.dnd5eapi.co/api/races/halfling')
    .then(function(response) {
        return response.json()
    })
    .then(function(halfling) {
        console.log("After json", halfling);

        const name = document.querySelector('.race');
        const abilities = document.querySelector('.attributesList');
        const prof = document.createElement('li');
        const lang = document.createElement('li');
        const traits = document.createElement('li');
        const charName = document.querySelector('.name');

        characterObject.name = halfling.name
        characterObject.prof = halfling.starting_proficiencies.length
        characterObject.lang = halfling.languages[0]
        characterObject.traits = halfling.traits.length
        console.log('characterObject', characterObject);
        localStorage.setItem(characterObject.name, JSON.stringify(characterObject))
        console.log('json halfling name', JSON.parse(localStorage.getItem(characterObject.name)))

        name.textContent = 'Race: ' + halfling.name;
        prof.textContent = 'Proficiencies: ' + 'None';
        lang.textContent = 'Languages: ' + halfling.languages[0].name + ', ' + halfling.languages[1].name;
        traits.textContent = 'Traits: ' + halfling.traits[0].name + ', ' + halfling.traits[1].name + ', ' + halfling.traits[2].name;
        charName.textContent = 'Character Name: ' + characterName;

        abilities.append(prof);
        abilities.append(lang);
        abilities.append(traits);
    })
}

//++++++++++++++++++++++ START Class Abilities Block +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


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
        
        

        for (i = 0; i < 5; i++) {
            level.textContent = 'Wizard Level: ' + levels[i].level;
            console.log(level.textContent);

            cantrips.textContent = "Cantrips for this level: " + levels[i].spellcasting.cantrips_known;
            spellsByLevel1.textContent = "Level 1 spell slots: " + levels[i].spellcasting.spell_slots_level_1;
            spellsByLevel2.textContent = "Level 2 spell slots: " + levels[i].spellcasting.spell_slots_level_2;
            spellsByLevel3.textContent = "Level 3 spell slots: " + levels[i].spellcasting.spell_slots_level_3;
            arcaneRecovery.textContent = "Arcane Recovery: " + levels[i].class_specific.arcane_recovery_levels;

            // console.log(cantrips.textContent);
            // console.log(spellsByLevel1.textContent);
            // console.log(spellsByLevel2.textContent);
            // console.log(spellsByLevel3.textContent);
            // console.log(arcaneRecovery.textContent);
        }
        //rearrange append information based on changed variables above
        for (i = 0; i < 5; i++) {
            informationArea5.append(level);
            informationArea5.append(cantrips);
            informationArea5.append(spellsByLevel1);
            informationArea5.append(spellsByLevel2);
            informationArea5.append(spellsByLevel3);
            informationArea5.append(arcaneRecovery);
        }
    })
}

//++++++++++++++++++++++++++++++++++++++ END Class Abilities Block ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// these event listeners are for testing purposes
buttonEL.addEventListener('click', humanStats);
buttonEL.addEventListener('click', dwarfStats);
buttonEL.addEventListener('click', elfStats);
buttonEL.addEventListener('click', halflingStats);
//buttonEL.addEventListener('click', classSpells);
buttonEL.addEventListener('click', classSpecificInfo);

/////////////////////

/////MODEL FORM//////

const myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
    keyboard: false
  })

submitBtn.addEventListener('click', function(event) {
    event.preventDefault();
    const characterName = document.getElementById('character-name');
    const characterInfo = characterName.value.trim()
    const race = document.getElementById('raceSelect');
    const raceText = race.options[race.selectedIndex].text;
    console.log("race info", raceText);
    
    switch(raceText) {
        case 'Human': 
            humanStats(characterInfo)
            break;
        case 'Dwarf':
            dwarfStats(characterInfo)
            break
        case 'Elf':
            elfStats(characterInfo)
            break
        case 'Halfling':
            halflingStats(characterInfo)
            break
            default: 
            console.log('Invalid Selection!!!');
    };

    myModal.hide();
});

//////////////////

// these event listeners are for testing purposes
// buttonEL.addEventListener('click', humanStats);
// buttonEL.addEventListener('click', dwarfStats);
// buttonEL.addEventListener('click', elfStats);
// buttonEL.addEventListener('click', halflingStats);


//////////API for footer/////////

const riddleButton = document.getElementById('riddle');
const jokePost = document.getElementById('jokePost');
const answerButton = document.getElementById('answer');
const jokeAnswer = document.getElementById('jokeAnswer');
const jokeApi = `https://official-joke-api.appspot.com/random_joke`

const riddlePost = function(){
    fetch(jokeApi)
    .then(function(response){
        return response.json()
    })
    .then(function(joke){
        console.log("Jokes here", joke);
        const jokeArea = document.getElementById('jokePost');
        const displayJoke = document.createElement('h3');
        const answerArea = document.getElementById('jokeAnswer')
        const displayAnswer = document.createElement('h3');

        displayAnswer.textContent = answer.punchline;
        displayJoke.textContent = joke.setup;
        jokeArea.append(displayJoke);
        answerArea.append(displayAnswer);

        riddleButton.addEventListener('click', riddlePost);
        answerButton.addEventListener('click', answerPost); 
    })
}
// riddleButton.addEventListener('click', riddlePost);
// answerButton.addEventListener('click', answerPost);
// const answerPost = function(){
//         return(function(answer){
//         console.log("answer here", answer);
//         const answerArea = document.getElementById('jokeAnswer');
//         const displayAnswer = document.createElement('h3');
//         displayAnswer.textContent = answer.punchline;
//         answerArea.append(displayAnswer);
//     })
// }

// riddleButton.addEventListener('click', riddlePost);
// answerButton.addEventListener('click', answerPost);


////////notepad script//////

let inputTitle = document.getElementById('note-title');
let addBtn = document.getElementById('addBtn');
let inputText = document.getElementById('note-text');
let output = document.getElementById('output');

let child, delBtn, h2, p;

// addBtn.addEventListener('click', function(event){
//     event.preventDefault();
//     if ((inputTitle.value == '') | (inputTitle.value == ' ')) {
//         alert("Please write a title.")

//     }else if((inputText.value == '') | (inputText.value == ' ')){
//         alert("Please write a note.")
//     }else {
//         child = document.createElement("div");
//         delBtn = document.createElement("button");
//         h2 = document.createElement("h2");
//         p = document.createElement("p");

//         h2.innerHTML = inputTitle.value;
//         p.innerHTML = inputText.value;
//         delBtn.innerHTML = "Delete";
        
//         child.classList.add('lists');
//         delBtn.classList.add('delete');
//         h2.classList.add('output-title');
//         p.classList.add('text');

//         child.appendChild(delBtn);
//         child.appendChild(h2);
//         child.appendChild(p);
//         output.appendChild(child);

//         inputTitle.innerHTML = "";
//         inputText.innerHTML = "";
//     }
//     delBtn.addEventListener('click', function(){
//         output.removeChild(this.parentElement);
        
// })
// })

const characterName = document.getElementById('character-name');
const raceHuman = document.getElementById('raceOne');
const raceDwarf = document.getElementById('raceTwo');
const raceElf = document.getElementById('raceThree');
const raceHalfling = document.getElementById('raceFour');
const classFighter = document.getElementById('classOne');
const classBarbarian = document.getElementById('classTwo');
const classWizard = document.getElementById('classThree');
const classRanger = document.getElementById('classFour');

const submitBtn = document.getElementById('modelSubmitBtn');

// submitBtn.addEventListener('click', function(event) {
//     event.preventDefault();
//     const characterInfo = {
//         name: characterName.value.trim(),
//         // race: characterRace.value,
//         // class: characterClass.value
//     };



//     localStorage.setItem('characterInfo', JSON.stringify(characterInfo));
    
// });



