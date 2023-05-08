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
const gameboard = [];

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
    player1Name = user1Input.value;
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
    player2Name = user2Input.value;
    closeModal();
  }

  const playGame = (() => {
    let whosTurn = "X";
    let space;

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
        firstSpace.innerText = whosTurn;
        logTurn(space, whosTurn);
      });
      secondSpace.addEventListener("click", () => {
        space = 1;
        secondSpace.innerText = whosTurn;
        logTurn(space, whosTurn);
      });
      thirdSpace.addEventListener("click", () => {
        space = 2;
        thirdSpace.innerText = whosTurn;
        logTurn(space, whosTurn);
      });
      fourthSpace.addEventListener("click", () => {
        space = 3;
        fourthSpace.innerText = whosTurn;
        logTurn(space, whosTurn);
      });
      fifthSpace.addEventListener("click", () => {
        space = 4;
        fifthSpace.innerText = whosTurn;
        logTurn(space, whosTurn);
      });
      sixthSpace.addEventListener("click", () => {
        space = 5;
        sixthSpace.innerText = whosTurn;
        logTurn(space, whosTurn);
      });
      seventhSpace.addEventListener("click", () => {
        space = 6;
        seventhSpace.innerText = whosTurn;
        logTurn(space, whosTurn);
      });
      eighthSpace.addEventListener("click", () => {
        space = 7;
        eighthSpace.innerText = whosTurn;
        logTurn(space, whosTurn);
      });
      ninethSpace.addEventListener("click", () => {
        space = 8;
        ninethSpace.innerText = whosTurn;
        logTurn(space, whosTurn);
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
    };

    const gameOver = () => {
      if (
        gameboard[1] === player1.token &&
        gameboard[2] === player1.token &&
        gameboard[3] === player1.token
      ) {
        display = player1Name + " wins!";
      } else if (
        gameboard[4] === player1.token &&
        gameboard[5] === player1.token &&
        gameboard[6] === player1.token
      ) {
        display = player1Name + " wins!";
      } else if (
        gameboard[7] === player1.token &&
        gameboard[8] === player1.token &&
        gameboard[9] === player1.token
      ) {
        display = player1Name + " wins!";
      } else if (
        gameboard[1] === player1.token &&
        gameboard[5] === player1.token &&
        gameboard[9] === player1.token
      ) {
        display = player1Name + " wins!";
      } else if (
        gameboard[3] === player1.token &&
        gameboard[5] === player1.token &&
        gameboard[7] === player1.token
      ) {
        display = player1Name + " wins!";
      } else if (
        gameboard[1] === player2.token &&
        gameboard[2] === player2.token &&
        gameboard[3] === player2.token
      ) {
        display = player2Name + " wins!";
      } else if (
        gameboard[4] === player2.token &&
        gameboard[5] === player2.token &&
        gameboard[6] === player2.token
      ) {
        display = player2Name + " wins!";
      } else if (
        gameboard[7] === player2.token &&
        gameboard[8] === player2.token &&
        gameboard[9] === player2.token
      ) {
        display = player2Name + " wins!";
      } else if (
        gameboard[1] === player2.token &&
        gameboard[5] === player2.token &&
        gameboard[9] === player2.token
      ) {
        display = player2Name + " wins!";
      } else if (
        gameboard[3] === player2.token &&
        gameboard[5] === player2.token &&
        gameboard[7] === player2.token
      ) {
        display = player2Name + " wins!";
      } else if (
        gameboard[1] !== "" &&
        gameboard[2] !== "" &&
        gameboard[3] !== "" &&
        gameboard[4] !== "" &&
        gameboard[5] !== "" &&
        gameboard[6] !== "" &&
        gameboard[7] !== "" &&
        gameboard[8] !== "" &&
        gameboard[9] !== ""
      ) {
        display = "Its a Tie!";
      }
    };
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
        playerSelection();
        playerToken = "";
      });
    }
    restart();
  })();
})();
