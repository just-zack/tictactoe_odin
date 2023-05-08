/*
1. gameboard = array
2. Gameboard object/ funtion/ module
3. Player factory function
4. game function
5. display function
6. Fill space function
- manipulate dom
- keep players from taking a filled space
7. check for game over function
8. Player enters name
9. Restart game button
10. Display element : congratulates winner


Player
- name of player
- player token


Game
- gameboard array
- fill space function
- check for game over function
- restart game button

gameboard
- gameboard array
- display function
- restart game
- display ellement

*/
let playerToken;
let player1Name;
let player2Name;
let player1Token;
let player2Token;
let gameboard = [];
let display;

const playGame = (() => {
  let whosTurn = "X";
  let space;
  let whosX;
  let whosO;

  const playerSelection = (() => {
    const modal = document.getElementById("modal");
    const modalContent1 = document.getElementById("modal_content_1");
    const modalContent2 = document.getElementById("modal_content_2");
    const player1Submit = document.getElementById("next_modal");
    const submitBtn = document.getElementById("submit");
    const user1Input = document.getElementById("player1_name");
    const user2Input = document.getElementById("player2_name");
    const X = document.getElementById("X");
    const O = document.getElementById("O");

    submitBtn.addEventListener("click", submit);
    player1Submit.addEventListener("click", nextModal);
    X.addEventListener("click", () => {
      player1Token = "X";
      player2Token = "O";
      O.classList.remove("selected");
      X.classList.toggle("selected");
    });
    O.addEventListener("click", () => {
      player1Token = "O";
      player2Token = "X";
      whosX = player2Name;
      whosO = player1Name;
      X.classList.remove("selected");
      O.classList.toggle("selected");
    });

    function nextModal() {
      modalContent1.style.display = "none";
      modalContent2.style.display = "flex";
    }

    function closeModal() {
      modal.style.display = "none";
      modalContent1.style.display = "flex";
      modalContent2.style.display = "none";
    }

    function overrideSubmit(event) {
      event.preventDefault();
    }

    function submit() {
      overrideSubmit(event);
      setPlayerValues();
      closeModal();
      updateGameMessage();
    }

    function setPlayerValues() {
      player1Name = user1Input.value;
      player2Name = user2Input.value;
      if (player1Token === "X") {
        whosX = player1Name;
        whosO = player2Name;
      } else {
        whosX = player2Name;
        whosO = player1Name;
      }
    }
  })();

  function markSpace() {
    const firstSpace = document.getElementById("1a");
    const secondSpace = document.getElementById("1b");
    const thirdSpace = document.getElementById("1c");
    const fourthSpace = document.getElementById("2a");
    const fifthSpace = document.getElementById("2b");
    const sixthSpace = document.getElementById("2c");
    const seventhSpace = document.getElementById("3a");
    const eighthSpace = document.getElementById("3b");
    const ninethSpace = document.getElementById("3c");

    firstSpace.addEventListener("click", () => {
      space = 0;
      if (gameboard[space] === undefined) {
        firstSpace.innerText = whosTurn;
        logTurn(space, whosTurn);
      }
    });
    secondSpace.addEventListener("click", () => {
      space = 1;
      if (gameboard[space] === undefined) {
        secondSpace.innerText = whosTurn;
        logTurn(space, whosTurn);
      }
    });
    thirdSpace.addEventListener("click", () => {
      space = 2;
      if (gameboard[space] === undefined) {
        thirdSpace.innerText = whosTurn;
        logTurn(space, whosTurn);
      }
    });
    fourthSpace.addEventListener("click", () => {
      space = 3;
      if (gameboard[space] === undefined) {
        fourthSpace.innerText = whosTurn;
        logTurn(space, whosTurn);
      }
    });
    fifthSpace.addEventListener("click", () => {
      space = 4;
      if (gameboard[space] === undefined) {
        fifthSpace.innerText = whosTurn;
        logTurn(space, whosTurn);
      }
    });
    sixthSpace.addEventListener("click", () => {
      space = 5;
      if (gameboard[space] === undefined) {
        sixthSpace.innerText = whosTurn;
        logTurn(space, whosTurn);
      }
    });
    seventhSpace.addEventListener("click", () => {
      space = 6;
      if (gameboard[space] === undefined) {
        seventhSpace.innerText = whosTurn;
        logTurn(space, whosTurn);
      }
    });
    eighthSpace.addEventListener("click", () => {
      space = 7;
      if (gameboard[space] === undefined) {
        eighthSpace.innerText = whosTurn;
        logTurn(space, whosTurn);
      }
    });
    ninethSpace.addEventListener("click", () => {
      space = 8;
      if (gameboard[space] === undefined) {
        ninethSpace.innerText = whosTurn;
        logTurn(space, whosTurn);
      }
    });
  }
  markSpace();

  const logTurn = (space, token) => {
    gameboard[space] = token;
    if (whosTurn === "X") {
      whosTurn = "O";
    } else {
      whosTurn = "X";
    }
    updateGameMessage();
  };

  const checkGameOver = () => {
    if (
      gameboard[1] === player1Token &&
      gameboard[2] === player1Token &&
      gameboard[3] === player1Token
    ) {
      display = player1Name + " wins!";
    } else if (
      gameboard[4] === player1Token &&
      gameboard[5] === player1Token &&
      gameboard[6] === player1Token
    ) {
      display = player1Name + " wins!";
    } else if (
      gameboard[7] === player1Token &&
      gameboard[8] === player1Token &&
      gameboard[9] === player1Token
    ) {
      display = player1Name + " wins!";
    } else if (
      gameboard[1] === player1Token &&
      gameboard[5] === player1Token &&
      gameboard[9] === player1Token
    ) {
      display = player1Name + " wins!";
    } else if (
      gameboard[3] === player1Token &&
      gameboard[5] === player1Token &&
      gameboard[7] === player1Token
    ) {
      display = player1Name + " wins!";
    } else if (
      gameboard[1] === player2Token &&
      gameboard[2] === player2Token &&
      gameboard[3] === player2Token
    ) {
      display = player2Name + " wins!";
    } else if (
      gameboard[4] === player2Token &&
      gameboard[5] === player2Token &&
      gameboard[6] === player2Token
    ) {
      display = player2Name + " wins!";
    } else if (
      gameboard[7] === player2Token &&
      gameboard[8] === player2Token &&
      gameboard[9] === player2Token
    ) {
      display = player2Name + " wins!";
    } else if (
      gameboard[1] === player2Token &&
      gameboard[5] === player2Token &&
      gameboard[9] === player2Token
    ) {
      display = player2Name + " wins!";
    } else if (
      gameboard[3] === player2Token &&
      gameboard[5] === player2Token &&
      gameboard[7] === player2Token
    ) {
      display = player2Name + " wins!";
    } else if (
      gameboard[1] !== undefined &&
      gameboard[2] !== undefined &&
      gameboard[3] !== undefined &&
      gameboard[4] !== undefined &&
      gameboard[5] !== undefined &&
      gameboard[6] !== undefined &&
      gameboard[7] !== undefined &&
      gameboard[8] !== undefined &&
      gameboard[9] !== undefined
    ) {
      display = "Its a Tie!";
    }
  };

  function updateGameMessage() {
    const gameMessage = document.getElementById("game_message");
    if (whosTurn === "X") {
      display = whosX + ", it's your turn";
    } else {
      display = whosO + ", it's your turn";
    }
    checkGameOver();
    gameMessage.innerText = display;
  }

  function restart() {
    const restart = document.getElementById("restart");
    const user1Input = document.getElementById("player1_name");
    const user2Input = document.getElementById("player2_name");

    restart.addEventListener("click", () => {
      modal.style.display = "flex";
      player1Name = "";
      user1Input.value = "";
      player2Name = "";
      user2Input.value = "";
      player1Token = "";
      player2Token = "";
      gameboard = [];
      playerToken = "";
    });
  }
  restart();
  checkGameOver();
})();
