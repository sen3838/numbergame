let result = document.querySelector("#result"),
  chance = document.querySelector("#chance"),
  user = document.querySelector("#user"),
  playBtn = document.querySelector("#play"),
  resetBtn = document.querySelector("#reset");

let chances = 5;
let gameover = false;
let history = [];

function ramdomNum() {
  comnum = Math.floor(Math.random() * 100 - 1); //floor는 소수점 버리는 것
  console.log(comnum);
}
ramdomNum();

playBtn.addEventListener("click", play); //play 안에 함수 호출

function play() {
  let userNum = user.value;
  user.value = ""; //user 가 입력한 값
  // console.log(userNum);

  if (userNum < 1 || userNum > 100) {
    result.textContent = "1~100까지의 수를 입력하세요";
    return; // 호출한 play 함수로 다시 돌아가라는 것
  }

  // 같은 숫자 있는지 확인
  console.log(history.includes(userNum));

  if (history.includes(userNum)) {
    result.textContent = "이미 입력한 숫자입니다. 다른숫자 입력해주세요";
    result.style.fontSize = "14px";
    return;
  }

  if (comnum > userNum) {
    // console.log("up");
    result.textContent = "UP";
    document.querySelector("#imgbox").src = "img/up.png"; //이미지 변경
  } else if (comnum < userNum) {
    // console.log("down");
    result.textContent = "DOWN";
    document.querySelector("#imgbox").src = "img/down.png";
  } else {
    // console.log("bingo");
    result.textContent = "BINGO !";
    document.querySelector("#imgbox").src = "img/bingo.png";
  }

  chances = chances - 1;
  chance.textContent = `남은찬스 ${chances}번`;

  //히스토리 배열 활성화
  history.push(userNum);
  console.log(history);

  // 찬스 모두 소진 버튼비활성화
  if (chances < 1) {
    gameover = true;
  }
  if (gameover == true) {
    playBtn.disabled = true;
    chance.textContent = `기회를 모두 소진하였습니다.`;
    document.querySelector("#imgbox").src = "img/gameover.png";
  }

  // 초기화버튼 - 모두 초기화

  resetBtn.addEventListener("click", reset);

  function reset() {
    document.querySelector("#imgbox").src = "img/gamestart.png";
    chances = 5;
    chance.textContent = `남은 찬스 ${chances}번`;
    playBtn.disabled = false;
    result.textContent = "up / down / bingo";
    ramdomNum();
  }
  user.addEventListener("focus", () => {
    user.value = "";
  });
}
