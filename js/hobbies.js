// 1- Create an array of your hobbies in a constant.  
// Be sure to have at least 6 hobbies in your array.  

// 2- Use Array Destructuring to console log the first, 
// third and sixth hobbies.   

let  myHobbies = [ "Coding", "Camping", "Running", "Painting","Antiquing","Record Collecting"];
    
let hobbyList = document.getElementById("mHobbies ");

myHobbies.forEach(hobby => {

    let listItem = document.createElement("li");

    listItem.textContent = `${hobby.hobbyName} sleeps for ${hobby.hobbyName} hours`;

    hobbyList.appendChild(listItem);
});