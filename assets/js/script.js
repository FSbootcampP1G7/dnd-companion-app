const buttonEL = document.getElementById('clickMe');
const information = document.getElementById('information');

// const wizardLevels = function() {
//     fetch('https://www.dnd5eapi.co/api/classes/wizard/levels')
//     .then(function(response) {
//         console.log(response);
//         return response.json();
//     })
//     .then(function(wizard) {
//         console.log("after json()", wizard);
//         console.log('cantrips?', wizard[0].spellcasting.cantrips_known);
//         //the for loop below loops through spell slots and cantrips for wizard levels 1-20
//         for(let i = 0; i < 19; i++) {
//             console.log(wizard[i].cantrips_known);
//             const h3Tags = document.createElement('h3');
//             h3Tags.textContent = wizard[0].spellcasting.cantrips_known;
//             information.append(h3Tags);
//         }
//     })
// }


// buttonEL.addEventListener('click', wizardLevels);

const humanStats = function() {
    fetch('https://www.dnd5eapi.co/api/races/human')
    .then(function(response) {
        return response.json()
    })
    .then(function(human) {
        console.log("After json", human);

        const h3Tag = document.createElement('h3');
        const pTag = document.createElement('p');

        h3Tag.textContent = human.index;
        pTag.textContent = human.starting_proficiencies.length

        information.append(h3Tag);
        h3Tag.append(pTag);


    })
}

buttonEL.addEventListener('click', humanStats);