


let talent = [];


for( let i = 1; i <= 14; i++){
    talent[i] = document.querySelector(`#t${i}`);
}
console.log(talent[1]);
const maxValue1 = 5;
const maxValue2 = 3;
const maxValue3 = 1;


let inputValue = 0;

let totalPoints = 0; 


function writeOutPoints(){
    talent[1].innerHTML = `<p>${inputValue}/${maxValue1}</p>`
    talent[2].innerHTML = `<p>${inputValue}/${maxValue1}</p>`
    talent[3].innerHTML = `<p>${inputValue}/${maxValue1}</p>`
    talent[4].innerHTML = `<p>${inputValue}/${maxValue1}</p>`
    talent[5].innerHTML = `<p>${inputValue}/${maxValue3}</p>`
    talent[6].innerHTML = `<p>${inputValue}/${maxValue1}</p>`
    talent[7].innerHTML = `<p>${inputValue}/${maxValue2}</p>`
    talent[8].innerHTML = `<p>${inputValue}/${maxValue1}</p>`
    talent[9].innerHTML = `<p>${inputValue}/${maxValue1}</p>`
    talent[10].innerHTML = `<p>${inputValue}/${maxValue3}</p>`
    talent[11].innerHTML = `<p>${inputValue}/${maxValue2}</p>`
    talent[12].innerHTML = `<p>${inputValue}/${maxValue2}</p>`
    talent[13].innerHTML = `<p>${inputValue}/${maxValue1}</p>`
    talent[14].innerHTML = `<p>${inputValue}/${maxValue3}</p>`
}

writeOutPoints();

function addTalent(point, maxValue){
    if (totalPoints < 51)
    if(point <= maxValue){
  
    point++
    talent[1].innerHTML = `<p>${inputValue}/${maxValue1}</p>`

  }
  console.log(point);
}

talent[1].addEventListener('click', function(){
    addTalent(inputValue, maxValue1)
    console.log(inputValue);
    
})

