const submitBtn = document.getElementById('modelSubmitBtn');
const name = document.querySelector('.race');
const abilities = document.querySelector('.attributesList');
const prof = document.createElement('li');
const lang = document.createElement('li');
const traits = document.createElement('li');
const charName = document.querySelector('.name');

let characterObject = {
    name: '',
    prof: '',
    lang: '',
    traits: ''
} 

////////RACE STATS//////////////

const humanStats = function(characterName) {
    fetch('https://www.dnd5eapi.co/api/races/human')
    .then(function(response) {
        return response.json()
    })
    .then(function(human) {
        console.log("After json", human);

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

/////////////////////

/////MODEL FORM//////

const myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
    keyboard: false
  })

submitBtn.addEventListener('click', function(event) {
    event.preventDefault();
    pageReset();
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
    }; 
    myModal.hide();
});

const pageReset = function() { 
    prof.textContent = 'Proficiencies: None';
    lang.textContent = 'Languages: ' 
    traits.textContent = 'Traits: None';
    charName.textContent = 'Character Name: ' 
}

//////////////////

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

addBtn.addEventListener('click', function(event){
    event.preventDefault();
    if ((inputTitle.value == '') | (inputTitle.value == ' ')) {
        alert("Please write a title.")

    }else if((inputText.value == '') | (inputText.value == ' ')){
        alert("Please write a note.")
    }else {
        child = document.createElement("div");
        delBtn = document.createElement("button");
        h2 = document.createElement("h2");
        p = document.createElement("p");

        h2.innerHTML = inputTitle.value;
        p.innerHTML = inputText.value;
        delBtn.innerHTML = "Delete";
        
        child.classList.add('lists');
        delBtn.classList.add('delete');
        h2.classList.add('output-title');
        p.classList.add('text');

        child.appendChild(delBtn);
        child.appendChild(h2);
        child.appendChild(p);
        output.appendChild(child);

        inputTitle.innerHTML = "";
        inputText.innerHTML = "";
    }
    delBtn.addEventListener('click', function(){
        output.removeChild(this.parentElement);
        
})
})




