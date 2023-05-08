let player1Name;
let player2Name;
let player1Token;
let player2Token;
let gameboard = [];

const playGame = (() => {
  let whosTurn = "X";
  let space;
  let whosX;
  let whosO;
  let display;

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

  const logTurn = (space, token) => {
    gameboard[space] = token;
    if (whosTurn === "X") {
      whosTurn = "O";
    } else {
      whosTurn = "X";
    }
    checkGameOver();
    updateGameMessage();
  };

  const checkGameOver = () => {
    const winningString = document.getElementById("winning_message");

    if (
      gameboard[0] === player1Token &&
      gameboard[1] === player1Token &&
      gameboard[2] === player1Token
    ) {
      winningString.innerText = player1Name + " wins!";
      gameOver();
    } else if (
      gameboard[3] === player1Token &&
      gameboard[4] === player1Token &&
      gameboard[5] === player1Token
    ) {
      winningString.innerText = player1Name + " wins!";
      gameOver();
    } else if (
      gameboard[6] === player1Token &&
      gameboard[7] === player1Token &&
      gameboard[8] === player1Token
    ) {
      winningString.innerText = player1Name + " wins!";
      gameOver();
    } else if (
      gameboard[0] === player1Token &&
      gameboard[4] === player1Token &&
      gameboard[8] === player1Token
    ) {
      winningString.innerText = player1Name + " wins!";
      gameOver();
    } else if (
      gameboard[2] === player1Token &&
      gameboard[4] === player1Token &&
      gameboard[6] === player1Token
    ) {
      winningString.innerText = player1Name + " wins!";
      gameOver();
    } else if (
      gameboard[0] === player2Token &&
      gameboard[1] === player2Token &&
      gameboard[2] === player2Token
    ) {
      winningString.innerText = player2Name + " wins!";
      gameOver();
    } else if (
      gameboard[3] === player2Token &&
      gameboard[4] === player2Token &&
      gameboard[5] === player2Token
    ) {
      winningString.innerText = player2Name + " wins!";
      gameOver();
    } else if (
      gameboard[6] === player2Token &&
      gameboard[7] === player2Token &&
      gameboard[8] === player2Token
    ) {
      winningString.innerText = player2Name + " wins!";
      gameOver();
    } else if (
      gameboard[0] === player2Token &&
      gameboard[4] === player2Token &&
      gameboard[8] === player2Token
    ) {
      winningString.innerText = player2Name + " wins!";
      gameOver();
    } else if (
      gameboard[2] === player2Token &&
      gameboard[4] === player2Token &&
      gameboard[6] === player2Token
    ) {
      winningString.innerText = player2Name + " wins!";
      gameOver();
    } else if (
      gameboard[1] !== undefined &&
      gameboard[2] !== undefined &&
      gameboard[3] !== undefined &&
      gameboard[4] !== undefined &&
      gameboard[5] !== undefined &&
      gameboard[6] !== undefined &&
      gameboard[7] !== undefined &&
      gameboard[8] !== undefined &&
      gameboard[0] !== undefined
    ) {
      winningString.innerText = "Its a Tie!";
      gameOver();
    }
  };

  function updateGameMessage() {
    const gameMessage = document.getElementById("game_message");

    if (whosTurn === "X") {
      display = whosX + ", it's your turn";
    } else {
      display = whosO + ", it's your turn";
    }
    gameMessage.innerText = display;
  }

  function gameOver() {
    const modalContent1 = document.getElementById("modal_content_1");
    const modalContent2 = document.getElementById("modal_content_2");
    const modalContent3 = document.getElementById("modal_content_3");

    modalContent1.style.display = "none";
    modalContent2.style.display = "none";
    modalContent3.style.display = "flex";
    modal.style.display = "flex";
    restart();
  }

  function restart() {
    const restart = document.getElementById("restart");
    const playAgain = document.getElementById("play_again");
    const user1Input = document.getElementById("player1_name");
    const user2Input = document.getElementById("player2_name");
    const modalContent1 = document.getElementById("modal_content_1");
    const modalContent3 = document.getElementById("modal_content_3");
    const X = document.getElementById("X");
    const O = document.getElementById("O");

    restart.addEventListener("click", () => {
      modal.style.display = "flex";
      player1Name = "";
      user1Input.value = "";
      player2Name = "";
      user2Input.value = "";
      player1Token = "";
      player2Token = "";
      gameboard = [];
      whosX = "";
      whosO = "";
      whosTurn = "X";
      X.classList.remove("selected");
      O.classList.remove("selected");
      clearGameBoard();
    });

    playAgain.addEventListener("click", () => {
      modalContent3.style.display = "none";
      modalContent1.style.display = "flex";
      player1Name = "";
      user1Input.value = "";
      player2Name = "";
      user2Input.value = "";
      player1Token = "";
      player2Token = "";
      gameboard = [];
      whosX = "";
      whosO = "";
      whosTurn = "X";
      X.classList.remove("selected");
      O.classList.remove("selected");
      clearGameBoard();
    });

    function clearGameBoard() {
      const firstSpace = document.getElementById("1a");
      const secondSpace = document.getElementById("1b");
      const thirdSpace = document.getElementById("1c");
      const fourthSpace = document.getElementById("2a");
      const fifthSpace = document.getElementById("2b");
      const sixthSpace = document.getElementById("2c");
      const seventhSpace = document.getElementById("3a");
      const eighthSpace = document.getElementById("3b");
      const ninethSpace = document.getElementById("3c");

      firstSpace.innerText = "";
      secondSpace.innerText = "";
      thirdSpace.innerText = "";
      fourthSpace.innerText = "";
      fifthSpace.innerText = "";
      sixthSpace.innerText = "";
      seventhSpace.innerText = "";
      eighthSpace.innerText = "";
      ninethSpace.innerText = "";
    }
  }

  restart();
  markSpace();
})();
