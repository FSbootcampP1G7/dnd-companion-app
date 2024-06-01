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
        const informationArea4 = document.getElementById('information2');
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

// buttonEL.addEventListener('click', humanStats);
// buttonEL.addEventListener('click', dwarfStats);
// buttonEL.addEventListener('click', elfStats);
// buttonEL.addEventListener('click', halflingStats);


//////////API for footer/////////

const riddleButton = document.getElementById('riddle');
const jokePost = document.getElementById('jokePost');
const myHeaders = new Headers();
myHeaders.append("Accept", "application/json");

const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };
  
const riddlePost = function(){
    fetch("https://icanhazdadjoke.com/", requestOptions)
    .then(function(response){
    return response.json()
  }) 
  .then(function(joke){
    console.log('Jokes here', joke);
    const jokePost = document.getElementById('jokePost');
    const displayJoke = document.createElement('h3');

    displayJoke.textContent = joke.joke;
    jokePost.append(displayJoke);
})

};
riddleButton.addEventListener('click', riddlePost);

// const riddlePost = function(){
//     fetch('https://icanhazdadjoke.com/')
//     .then(function(response){
//         return response.json()
//     })
//     .then(function(joke){
//         console.log("Jokes here", joke);
//         const jokeArea = document.getElementById('jokePost');
//         const displayJoke = document.createElement('h3');
//         displayJoke.textContent =  joke.setup;
//         jokeArea.append(displayJoke);
//     })
// }
// const answerPost = function(){
//         return(function(answer){
//         console.log("Jokes here", answer);
//         const answerArea = document.getElementById('jokeAnswer');
//         const displayAnswer= document.createElement('h3');
//         displayAnswer.textContent =  answer.punchline;
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

addBtn.addEventListener('click', function(e){
    e.preventDefault();
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







