const grid = document.querySelector(".theGrid")
let talent = [];


for( let i = 1; i <= 14; i++){
    talent[i] = document.querySelector(`#t${i}`);
}
console.log(talent[1]);
const maxValue = [0, 5, 5, 5, 5, 1, 5, 3, 5, 5, 1, 3, 3, 5, 1];

let inputValue = [];

for (let i = 0; i <= 14; i++){
    inputValue[i] = 0;
}

let totalPoints = 0; 



function writeOutPoints() {
    for (let i = 1; i <= 14; i++) {
        talent[i].innerHTML = `<p>${inputValue[i]}/${maxValue[i]}</p>`;
    }
}


writeOutPoints();


function updateActiveClass(){
    if(totalPoints >= 5){
        talent[3].classList.add('active');
        talent[4].classList.add('active');
    }

    else if( totalPoints < 5){
        talent[3].classList.remove('active');
        talent[4].classList.remove('active');
    }

    if( totalPoints >= 10) {
        talent[5].classList.add('active');
        talent[6].classList.add('active');
        talent[7].classList.add('active');
    }

    else if( totalPoints < 10){
        talent[5].classList.remove('active');
        talent[6].classList.remove('active');
        talent[7].classList.remove('active');
    }

    if( totalPoints >= 15) {
        talent[8].classList.add('active');
       
      
    }

    else if( totalPoints < 15){
        talent[8].classList.remove('active');
     
        
    }

    if( totalPoints >= 15 && inputValue[4] === maxValue[4]) {
        talent[9].classList.add('active');
       
      
    }

    else if( totalPoints < 15 || inputValue[4] !== maxValue[4]){
        talent[9].classList.remove('active');
     
        
    }

    if(totalPoints >= 20){
        talent[10].classList.add('active');
        talent[11].classList.add('active');
        talent[12].classList.add('active');
    }

    else if( totalPoints < 20){
        talent[10].classList.remove('active');
        talent[11].classList.remove('active');
        talent[12].classList.remove('active');
    }

    if( totalPoints >= 25){
        talent[13].classList.add('active');
    }
    else if (totalPoints < 25){
        talent[13].classList.remove('active');
    }

    if(totalPoints >= 30 && inputValue[11] === maxValue[11]){
        talent[14].classList.add('active')
    }

    else {talent[14].classList.remove('active')}

}

// function updateActiveClass(neededPoints, numOfTalent1, numOfTalent2, numOfTalent3) {
//     if (totalPoints >= neededPoints) {
//         talent[numOfTalent1].classList.add('active');
//     } else {
//         talent[numOfTalent1].classList.remove('active');
//     }
//     if (totalPoints >= neededPoints) {
//         talent[numOfTalent2].classList.add('active');
//     } else {
//         talent[numOfTalent2].classList.remove('active');
//     }
//     if (totalPoints >= neededPoints) {
//         talent[numOfTalent3].classList.add('active');
//     } else {
//         talent[numOfTalent3].classList.remove('active');
//     }
    
// }

function addTalent(index) {
    if (totalPoints < 31 && inputValue[index] < maxValue[index] && talent[index].classList.contains('active')) {
        inputValue[index]++;
        totalPoints++;
        talent[index].innerHTML = `<p>${inputValue[index]}/${maxValue[index]}</p>`;
        console.log(totalPoints);
        
    }
}

function removeTalent(index) {
    if (inputValue[index] > 0){
        inputValue[index]--;
        totalPoints--;
        talent[index].innerHTML = `<p>${inputValue[index]}/${maxValue[index]}</p>`;

    }
}


grid.addEventListener('click', updateActiveClass);
grid.addEventListener('contextmenu', updateActiveClass);


for (let i = 1; i <= 14; i++) {
    talent[i].addEventListener('click', function() {
        addTalent(i);
    });
}

// talent[1].addEventListener('click', function() {
//     addTalent(1); 
// });




// talent[2].addEventListener('click', function() {
//     addTalent(2); 
// });

// talent[3].addEventListener('click', function() {
//     addTalent(3); 
// });

// talent[4].addEventListener('click', function() {
//     addTalent(4); 
// });

// talent[5].addEventListener('click', function() {
//     addTalent(5); 
// });


// talent[6].addEventListener('click', function() {
//     addTalent(6); 
// });


// talent[7].addEventListener('click', function() {
//     addTalent(7); 
// });

// talent[8].addEventListener('click', function() {
//     addTalent(8); 
// });

// talent[9].addEventListener('click', function() {
//     addTalent(9); 
// });


// talent[10].addEventListener('click', function() {
//     addTalent(10); 
// });

// talent[11].addEventListener('click', function() {
//     addTalent(11); 
// });

// talent[12].addEventListener('click', function() {
    
//     addTalent(12); 
// });



for(let i = 1; i <= 14; i++){
talent[i].addEventListener('contextmenu', function(event){
    event.preventDefault(); 
    removeTalent(i);


})

}

console.log(talent[3]);