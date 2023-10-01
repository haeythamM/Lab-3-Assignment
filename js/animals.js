// 1- Create a function that will get the animal names of those animals who have the habit of sleeping. 
//  Make sure you call the function! 

// 2- Create a function that will return the gender of the animals with 3 or more teams. 
//  Make sure you call the function! 
import { animalsZoo } from './animalsGender.js';

const  sleepyAnimals = [ 
    
    {name: "Brown Bat", hours: 20,},
    {name:"Lion", hours: 19,},
    {name:"Giant Armadillo",hours: 18,},
    {name:"North American Opossum", hours: 18,},
    {name:"Tiger", hours: 18,},
    {name:"Cat",hours: 14,},
    {name:"Dog", hours: 13,}
];

const animalsList = document.getElementById("s_AnimalsList");
sleepyAnimals.forEach(animal => {
    const listItem = document.createElement("li");
    listItem.textContent = `${animal.name} sleeps for ${animal.hours} hours`;
    animalsList.appendChild(listItem);
});
// ============Console part =====================

const printingFunc = ()=>{
    for (let index = 0; index < sleepyAnimals.length; index++) {
        console.log("Index [" 
        + index+ "] "
        + sleepyAnimals[index].name 
        + " sleeps for " +sleepyAnimals[index].hours 
        +" hours" );
    }
}

const printingZooFunc = ()=>{
    for (let index = 0; index < animalsZoo.length; index++) {
        console.log("Index [" +index+"]  , the ID = "
        + animalsZoo[index].id 
        + " the age = " 
        +animalsZoo[index].age +" years" 
        + " animal class = " +animalsZoo[index].animal_class 
        + "  gender = " 
        +animalsZoo[index].gender );
    }
}

const printingGender = () => {
    console.log("Only Female : ");
for (const animalF of animalsZoo) {
    
    if (animalF.id === '1A') {
    console.log(" the name is : "  
    + animalF.name + " ==> the kind is : " 
    + animalF.animal_class);
    }
}
console.log("Only Males : ");
for (const animal of animalsZoo) {
    
    if (animal.id === '1B') {
        console.log("The name is : "  
        + animal.name + " ==> the kind is : " 
        + animal.animal_class);
    }
}
console.log("Only Unknown : ");
for (const animal of animalsZoo) {
    
    if (animal.id === '1AB') {
    console.log("The name is : "  
    + animal.name + " ==> the kind is : " 
    + animal.animal_class);
    }
}
console.log("Mammoth Animals: ");
for (const animal of animalsZoo) {
    
    if (animal.animal_class === 'Mammoth Animals') {
    console.log(animal.gender 
        +" ==> the name is : "  
        + animal.name );
    }
}

};


// console.log(animalsZoo); // for testing 
printingFunc();// fill list 
console.log("============Console 2 =================");
printingZooFunc(animalsZoo); // fill list 
console.log("============Console 3 ===================");
printingGender(); // filtering the results gender and other
