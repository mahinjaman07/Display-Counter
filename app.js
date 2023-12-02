const CountBtn = num =>{
    const countContainer = document.getElementById('counter-number');
    let number = 0;
    const setIntervalId = setInterval(()=>{
        number += 5;
        countContainer.innerText = number;
        if(number >= num){
            clearInterval(setIntervalId);
        }
    },20);
}

CountBtn(500)
