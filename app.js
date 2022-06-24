const button = document.querySelector(".button");
const oneScore = document.querySelector('.oneScore');
const twoScore = document.querySelector('.twoScore');

const rollSound = document.querySelector('#rollSound');
const cheerSound = document.querySelector('#cheerSound');
const awSound = document.querySelector('#awSound');
const gameboySound = document.querySelector('#gameboySound');
const nintendoSound = document.querySelector('#nintendoSound');
const ohSound = document.querySelector('#ohSound');


let playerOne = 0;
let playerTwo = 0;




function visitPageOne(){
    gameboySound.currentTime = 0;
    gameboySound.play();
    setTimeout(function(){
    window.location='./oneplayer.html';
    }, 4000); 
}


function visitPageTwo(){
    nintendoSound.currentTime = 0;
    nintendoSound.play();
    setTimeout(function(){
    window.location='./twoplayer.html';
    }, 1000); 
}


function resetOne(){
    window.location.reload();
}

function winCheck() {
    if (playerOne >= 20 || playerTwo >= 20) {
        document.querySelector(".banner").innerHTML = ("We have a WINNER!");
        cheerSound.currentTime = 0;
        cheerSound.play();
        button.textContent = "Play again!"
        button.addEventListener('click', e => {
            resetOne();
        })
    }
}





function oneRoll() {
    setTimeout(function () {
        rollSound.currentTime = 0;
        rollSound.play();
        var randomNumber1 = Math.floor(Math.random() * 6) + 1;

        document.querySelector(".img1").setAttribute("src", "dice" + randomNumber1 + ".png");
        playerOne += randomNumber1
            oneScore.textContent = `Player 1 - ${playerOne}`;

        if (randomNumber1 === 1) {
            awSound.currentTime = 0;
            awSound.play();
            document.querySelector(".img1").setAttribute("src", "dice" + randomNumber1 + ".png");
        playerOne += randomNumber1
            oneScore.textContent = "You lose! You rolled a 1.";
            button.textContent = "Play again!"
            button.addEventListener('click', e => {
                resetOne();
            })
        } else {
            if (playerOne >= 20 ){
                cheerSound.currentTime = 0;
                cheerSound.play();
            document.querySelector(".img1").setAttribute("src", "dice" + randomNumber1 + ".png");
        playerOne += randomNumber1
            oneScore.textContent = "You win! You hit 20!";
            button.textContent = "Play again!"
            button.addEventListener('click', e => {
                resetOne();
            })
        }
    }
    },);
}








function twoRoll() {
    setTimeout(function () {
        rollSound.currentTime = 0;
        rollSound.play();
        var randomNumber1 = Math.floor(Math.random() * 6) + 1;
        var randomNumber2 = Math.floor(Math.random() * 6) + 1;

        document.querySelector(".img1").setAttribute("src", "dice" + randomNumber1 + ".png");

        document.querySelector(".img2").setAttribute("src", "dice" + randomNumber2 + ".png");

        if (randomNumber1 === randomNumber2 || randomNumber1 === 1 && randomNumber2 === 1) {
            ohSound.currentTime = 0;
            ohSound.play();
            document.querySelector(".banner").innerHTML = "Draw! Keep rolling...";
        }
        
        else if (randomNumber2 < randomNumber1 && randomNumber2 === 1) {
            document.querySelector(".banner").innerHTML = ("Player 1 wins that round! And Player 2 rolled a 1.");
            playerOne += randomNumber1
            playerTwo -= 1
            oneScore.textContent = `Player 1 - ${playerOne}`
            twoScore.textContent = `Player 2 - ${playerTwo}`
            winCheck()
        }

        else if (randomNumber1 < randomNumber2 && randomNumber1 === 1) {
            document.querySelector(".banner").innerHTML = ("Player 2 wins that round! And Player 1 rolled a 1.");
            playerTwo += randomNumber2
            playerOne -= 1
            oneScore.textContent = `Player 1 - ${playerOne}`
            twoScore.textContent = `Player 2 - ${playerTwo}`
            winCheck()
        }

        else if (randomNumber2 < randomNumber1) {
            document.querySelector(".banner").innerHTML = ("Player 1 wins that round!");
            playerOne += randomNumber1
            oneScore.textContent = `Player 1 - ${playerOne}`
            twoScore.textContent = `Player 2 - ${playerTwo}`
            winCheck()
        }

        else if (randomNumber1 < randomNumber2) {
            document.querySelector(".banner").innerHTML = ("Player 2 wins that round!");
            playerTwo += randomNumber2
            oneScore.textContent = `Player 1 - ${playerOne}`
            twoScore.textContent = `Player 2 - ${playerTwo}`
            winCheck()
        }

    }, );
}
