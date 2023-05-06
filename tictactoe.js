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
let display;

const Player = (name, token) => {
  const getName = () => name;
  const token = () => token;

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
      let display = player1Name + " wins!";
    } else if (
      gameboard[4] === player1.token &&
      gameboard[5] === player1.token &&
      gameboard[6] === player1.token
    ) {
      let display = player1Name + " wins!";
    } else if (
      gameboard[7] === player1.token &&
      gameboard[8] === player1.token &&
      gameboard[9] === player1.token
    ) {
      let display = player1Name + " wins!";
    } else if (
      gameboard[1] === player1.token &&
      gameboard[5] === player1.token &&
      gameboard[9] === player1.token
    ) {
      let display = player1Name + " wins!";
    } else if (
      gameboard[3] === player1.token &&
      gameboard[5] === player1.token &&
      gameboard[7] === player1.token
    ) {
      let display = player1Name + " wins!";
    } else if (
      gameboard[1] === player2.token &&
      gameboard[2] === player2.token &&
      gameboard[3] === player2.token
    ) {
      let display = player2Name + " wins!";
    } else if (
      gameboard[4] === player2.token &&
      gameboard[5] === player2.token &&
      gameboard[6] === player2.token
    ) {
      let display = player2Name + " wins!";
    } else if (
      gameboard[7] === player2.token &&
      gameboard[8] === player2.token &&
      gameboard[9] === player2.token
    ) {
      let display = player2Name + " wins!";
    } else if (
      gameboard[1] === player2.token &&
      gameboard[5] === player2.token &&
      gameboard[9] === player2.token
    ) {
      let display = player2Name + " wins!";
    } else if (
      gameboard[3] === player2.token &&
      gameboard[5] === player2.token &&
      gameboard[7] === player2.token
    ) {
      let display = player2Name + " wins!";
    }
  };
})();

let player1Name;
let player2Name;
let p1Token;
let p2Token;
const player1 = Player("player1Name", p1Token);
const player2 = Player("player2Name", p2Token);
