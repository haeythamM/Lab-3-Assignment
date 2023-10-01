// 1- Create a function that will get the animal names of those animals who have the habit of sleeping. 
//  Make sure you call the function! 

// 2- Create a function that will return the gender of the animals with 3 or more teams. 
//  Make sure you call the function! 

let  sleepyAnimals = [ 
    
    {name: "Brown Bat", hours: 20,},
    {name:"Lion", hours: 19,},
    {name:"Giant Armadillo",hours: 18,},
    {name:"North American Opossum", hours: 18,},
    {name:"Tiger", hours: 18,},
    {name:"Cat",hours: 14,},
    {name:"Dog", hours: 13,}
];

let animalsList = document.getElementById("s_AnimalsList");

sleepyAnimals.forEach(animal => {

    let listItem = document.createElement("li");

    listItem.textContent = `${animal.name} sleeps for ${animal.hours} hours`;

    animalsList.appendChild(listItem);
});