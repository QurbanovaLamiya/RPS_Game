var gameData = ["r", "p", "s"];
var player1Score = 0;
var player2Score = 0;
var player1RPS = document.querySelector("#player1Img");
var player2RPS = document.querySelector("#player2Img");
var player1ScorePanel = document.querySelector("#player1ScorePanel");
var player2ScorePanel = document.querySelector("#player2ScorePanel");
var winInfoPanel1 = document.querySelector("#winGame1");
var winInfoPanel2 = document.querySelector("#winGame2");

function randomCompAttack(arr) {
    var randomNum = Math.floor(Math.random() * arr.length);
    return arr[randomNum]
};

function startGame(e) {
    var userAttack = e.key.toLowerCase()
    var compAttack = randomCompAttack(gameData)

    if (gameData.indexOf(userAttack) === -1) {
        alert(`Please choose one of "r p s" letters`)
        return;
    }
    
    if (userAttack === compAttack) {
        console.log("----------------------");
        console.log("Draw");
        console.log("----------------------");

        player1RPS.src = `./img/${userAttack}.png`
        player2RPS.src = `./img/${compAttack}.png`

        winInfoPanel1.innerHTML = "DRAW"
        winInfoPanel2.innerHTML = "DRAW"

        winInfoPanel1.classList.remove("text-success");
        winInfoPanel2.classList.remove("text-success");

        winInfoPanel1.classList.remove("text-danger");
        winInfoPanel2.classList.remove("text-danger");

        winInfoPanel1.classList.add("text-warning");
        winInfoPanel2.classList.add("text-warning");

    } else if (userAttack === "p" && compAttack === "r") {
        console.log("----------------------");
        console.log("Player 1 win");
        console.log("----------------------");

        player1RPS.src = `./img/${userAttack}.png`
        player2RPS.src = `./img/${compAttack}.png`

        player1Score++

        player1ScorePanel.innerHTML = `Score: ${player1Score}`

        winInfoPanel1.innerHTML = "WIN"
        winInfoPanel2.innerHTML = "LOSE"

        winInfoPanel1.classList.add("text-success");
        winInfoPanel2.classList.add("text-danger");

        winInfoPanel1.classList.remove("text-danger");
        winInfoPanel2.classList.remove("text-success");

        winInfoPanel1.classList.remove("text-warning");
        winInfoPanel2.classList.remove("text-warning");


    } else if (userAttack === "r" && compAttack === "s") {
        console.log("----------------------");
        console.log("Player 1 win");
        console.log("----------------------");

        player1RPS.src = `./img/${userAttack}.png`
        player2RPS.src = `./img/${compAttack}.png`

        player1Score++

        player1ScorePanel.innerHTML = `Score: ${player1Score}`

        winInfoPanel1.innerHTML = "WIN"
        winInfoPanel2.innerHTML = "LOSE"

        winInfoPanel1.classList.add("text-success");
        winInfoPanel2.classList.add("text-danger");

        winInfoPanel1.classList.remove("text-danger");
        winInfoPanel2.classList.remove("text-success");

        winInfoPanel1.classList.remove("text-warning");
        winInfoPanel2.classList.remove("text-warning");

    } else if (userAttack === "s" && compAttack === "p") {
        console.log("----------------------");
        console.log("Player 1 win");
        console.log("----------------------");

        
        player1RPS.src = `./img/${userAttack}.png`
        player2RPS.src = `./img/${compAttack}.png`

        player1Score++

        player1ScorePanel.innerHTML = `Score: ${player1Score}`

        winInfoPanel1.innerHTML = "WIN"
        winInfoPanel2.innerHTML = "LOSE"

        winInfoPanel1.classList.add("text-success");
        winInfoPanel2.classList.add("text-danger");

        winInfoPanel1.classList.remove("text-danger");
        winInfoPanel2.classList.remove("text-success");

        winInfoPanel1.classList.remove("text-warning");
        winInfoPanel2.classList.remove("text-warning");

        } else {

        console.log("----------------------");
        console.log("Player 2 win");
        console.log("----------------------");

        player2Score++

        player2ScorePanel.innerHTML = `Score: ${player2Score}`

        winInfoPanel1.innerHTML = "LOSE"
        winInfoPanel2.innerHTML = "WIN"

        winInfoPanel1.classList.add("text-danger");
        winInfoPanel2.classList.add("text-success");

        winInfoPanel1.classList.remove("text-success");
        winInfoPanel2.classList.remove("text-danger");

        winInfoPanel1.classList.remove("text-warning");
        winInfoPanel2.classList.remove("text-warning");
    }

    console.log("--------------------");
    console.log("PLAYER1", userAttack);
    console.log("PLAYER2", compAttack);
}

window.onkeydown = startGame;