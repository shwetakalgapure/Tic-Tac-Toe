let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newGame = document.querySelector("#new");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;  //playerX, PlayerO

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const resetGame = () => {
  turnO = true;
  enableBtn();
  msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("Box was clicked");
    if (turnO) { //PlayerO turn
      box.innerText = "O";
      turnO = false;
    }
    else { //PlayerX turn
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;

    checkWinner();
  })
})

const enableBtn = () => {
  for (box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
}

const disableBtn = () => {
  for (box of boxes) {
    box.disabled = true;
  }
}

const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBtn();
}

const checkWinner = () => {
  for (let pattern of winPatterns) {
    // console.log(pattern[0], pattern[1], pattern[2]);
    // console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText);

    let post1Val = boxes[pattern[0]].innerText;
    let post2Val = boxes[pattern[1]].innerText;
    let post3Val = boxes[pattern[2]].innerText;

    if (post1Val != "" && post2Val != "" && post3Val != "") {
      if (post1Val === post2Val && post2Val === post3Val) {
        // console.log("Winner", post1Val);
        showWinner(post1Val);
      }
    }
  }
}
newGame.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);