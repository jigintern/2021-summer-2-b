//HomePageに戻る
export const back_home = () => {
    document.getElementById("HomePage").style.display = "block";
    document.getElementById("QuestionPage").style.display = "none";
    document.getElementById("AnswerPage").style.display = "none";
    document.getElementById("FinishPage").style.display = "none";
}