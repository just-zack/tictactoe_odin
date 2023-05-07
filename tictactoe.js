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
const modal = document.getElementById("modal");
const submitBtn = document.getElementById("submit");
const userInput = document.getElementById("player_name");
submitBtn.addEventListener("click", submit);

function closeModal() {
  modal.style.display = "none";
}

function overrideSubmit(event) {
  event.preventDefault();
}

function submit() {
  overrideSubmit(event);
  player1name = userInput.value;
  closeModal();
}

const Player = (name, token) => {
  const getName = () => name;
  const getToken = () => token;

  return { getName, token };
};

const game = (() => {
  const gameboard = [];
  let space;

  const fillSpace = (space, token) => (gameboard[space] = token);
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
})();

let p1Token;
let p2Token;
const player1 = Player("player1Name", p1Token);
const player2 = Player("player2Name", p2Token);
