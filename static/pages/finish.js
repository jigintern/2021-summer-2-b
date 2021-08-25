//HomePageに戻る
export const back_home = () => {
  document.getElementById("HomePage").style.display = "block";
  document.getElementById("QuestionPage").style.display = "none";
  document.getElementById("AnswerPage").style.display = "none";
  document.getElementById("FinishPage").style.display = "none";
  document.getElementById("StepCanvas").style.display = "none";
};

//点数書き換え
export const change_score = (score) => {
  let ele = document.getElementById("score");
  ele.textContent = `${score}点`;
}