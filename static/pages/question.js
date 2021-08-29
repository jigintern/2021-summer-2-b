import { answerButtonSound } from "../utils/sound.js";
import { answerpage } from "./answer.js";

export const questpage = (data, i, score) => {
  const question = document.getElementById("QuestionPage");
  const quest_ele = document.createElement("h2");
  quest_ele.id = "question" + i;
  quest_ele.className = "question";
  quest_ele.textContent = data[i].problem;
  question.appendChild(quest_ele);

  const subject_ele = document.createElement("h2");
  subject_ele.id = "subject";
  subject_ele.textContent = data[i].subject;
  question.appendChild(subject_ele);

  let j = 0;
  while (j < data[i].length) {
    const answer = document.getElementById("QuestionPage");
    const ans_ele = document.createElement("button");
    ans_ele.id = j;
    ans_ele.score = data[i].items[j].score;
    if (j == data[i].length - 1) ans_ele.id = "last";
    ans_ele.className = "answer";
    ans_ele.textContent = data[i].items[j].name;
    ans_ele.onclick = function () {
      const f = document.getElementById("QuestionPage");
      while (f.lastChild) {
        f.removeChild(f.lastChild);
      }
      answerButtonSound(ans_ele.score);
      answerpage(data, i, this.id, score);
    };
    answer.appendChild(ans_ele);
    j++;
  }
};
