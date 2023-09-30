// 1- Create a function that will get the animal names of those animals who have the habit of sleeping. 
//  Make sure you call the function! 

// 2- Create a function that will return the gender of the animals with 3 or more teams. 
//  Make sure you call the function! 

let  sleepyAnimals =  Object.create(Array.prototype, {
    firstAnimal:{
    name: "Brown Bat", 
    hours: 20,
    },
    secondAnimal:{
        name:"Lion",
        hours: 19,
    },
    thirdAnimal:{
        name:"Giant Armadillo",
        hours: 18,
    },
    forthAnimal:{
        name:"North American Opossum",
        hours: 18,
    },
    sixthAnimal:{
        name:"Tiger",
        hours: 18,
    },
    seventhAnimal:{
        name:"Cat",
        hours: 14,
    },
    eighthAnimal:{
        name:"Dog",
        hours: 13,
    }
});
console.log(sleepyAnimals.name);