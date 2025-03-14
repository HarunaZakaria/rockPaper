function getComputerChoice(){
    let randomNum = Math.floor(Math.random()  * 3);
    if (randomNum === 0){
        console.log("Rock");
    }
    else if (randomNum === 1){
        console.log("Paper");
    }
    else{
        console.log("Scissors");
    }
}


getComputerChoice();