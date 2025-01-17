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
  // console.log(comnum);
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
    return;
  }

  if (comnum > userNum) {
    // console.log("up");
    result.textContent = "결과 : up";
    document.querySelector("#imgbox").src = "bgSquare.png"; //이미지 변경
  } else if (comnum < userNum) {
    // console.log("down");
    result.textContent = "결과 : down";
  } else {
    // console.log("bingo");
    result.textContent = "정답입니다!!~bingo";
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
  }

  // 초기화버튼 - 모두 초기화

  resetBtn.addEventListener("click", reset);

  function reset() {
    document.querySelector("#imgbox").src = "logo0827.png";
    chances = 5;
    chance.textContent = `남은찬스 ${chances}번`;
    playBtn.disabled = false;
    result.textContent = "결과화면 : up / down / bingo";
    ramdomNum();
  }
  user.addEventListener("focus", () => {
    user.value = "";
  });
}
