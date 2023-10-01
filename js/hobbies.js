// 1- Create an array of your hobbies in a constant.  
// Be sure to have at least 6 hobbies in your array.  

// 2- Use Array Destructuring to console log the first, 
// third and sixth hobbies.   

const  myHobbies = [ "Coding", "Camping", "Running", "Painting","Antiquing","Record Collecting"];
    
const hobbyList = document.getElementById("mHobbies");

myHobbies.forEach(hobby => {

    const listItem = document.createElement("li");

    listItem.textContent = ` ${hobby} `;

    hobbyList.appendChild(listItem);
});

printArrow = ()=>{
    for (let index = 0; index < myHobbies.length; index++) {
        console.log(myHobbies[index] + "The index [" + index +"]" );
    }
}
printArrow();