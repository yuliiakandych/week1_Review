import People from "./modules/DataObject.js"

// IIFE - Immediately Invoced Function Expression

(() => {

console.log('fired!');
//grab the bio container and ready to populate its content 
const bioInfo = document.querySelector('.bio-wrapper').children;




function snowProfData(){
    // change data on the page here
    let currentProf = this.textContent;

//this refers to the heading tag (the first child of the bio-wrapper div)
bioInfo[0].textContent = People[currentProf].name;
//this refers to the paragraph tag (the second child of the bio-wrapper div)
bioInfo[1].textContent = People[currentProf].role;

bioInfo[2].textContent = People[currentProf].bio;

bioInfo[3].src = `images/${People[currentProf].avatar}`;

    debugger;
}

for (let prof in People){
    console.log(prof);


    let teamButton = document.createElement('button');

    teamButton.textContent = prof
    teamButton.addEventListener('click', snowProfData);

    document.querySelector('#section1').appendChild(teamButton);
}
debugger;
})();