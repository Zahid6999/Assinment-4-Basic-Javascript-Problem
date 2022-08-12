/*---------- Problem 1----------- */
//===1-Degree = 0.0174533 Radian=====

function radianToDegree(radian){
    const degree = 0.0174533;
    let convertRadianToDegree = radian / degree;
    convertRadianToDegree = convertRadianToDegree.toFixed(2);
    return convertRadianToDegree;
}

const degreeResult = radianToDegree(10);
console.log( degreeResult);





/* ------------Problem 2------------- */

function isJavaScriptFile(jsFileName){
    if(jsFileName === 'app.js'){
       return true;
    }else{
        return false;
    }
}

const resultFileName = isJavaScriptFile('app.js');
console.log(resultFileName);




/* -----------Problem 3------------ */

function oilPrice(diesel, petrol, octane){
   const oneLiterDiesel = 114;
   const oneLiterPetrol = 130;
   const oneLiterOctane = 135;

   const totalDiesel = oneLiterDiesel * diesel;
   const totalPetrol = oneLiterOctane * petrol;
   const totalOctane = oneLiterPetrol * octane;
   const dieselPetrolOctanePirce = totalDiesel + totalPetrol + totalOctane;
   return dieselPetrolOctanePirce;
}

const totalOilPrice = oilPrice(30, 20, 10);
console.log(totalOilPrice);





/* ----------problem 4----------*/

function publicBusFare(people){
 let bus = people / 50;
 people = people % 50;
 let microBus = people / 11;
 people = people % 11;
 return people * 250;
   
}
 const result = publicBusFare(365);
 console.log(result);





/* -------------Problem 5---------------- */

function isBestFriend(abul, babul){
    if(abul.name === babul.friend){
        return true;
    }
    return false;
}
const friend1 = {name: 'abul', friend: 'babul'};
const friend2 = {name: 'babul', friend: 'abul'};
const friendResult = isBestFriend(friend1, friend2);
console.log(friendResult);