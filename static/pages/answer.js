import { finishpage } from "./finish.js";
import { questpage } from "./question.js";
import { ButtonClick } from "../utils/canvas.js";
import { buttonSound } from "../utils/sound.js";

export const answerpage = (data, i, ans, score) => {
  if (ans == "last") ans = data[i].length - 1;
  // console.log(i);
  // console.log(data[i].items[ans].name);
  // console.log(data[i].items[ans].score);
  // console.log(data[i].problem);
  score += data[i].items[ans].score;

  const text = document.getElementById("AnswerPage");

  const question_text = document.createElement("h2");
  question_text.textContent = "問題：" + data[i].problem;
  text.appendChild(question_text);

  const select_tab = document.createElement("p");
  select_tab.textContent = "解答：" + data[i].items[ans].name;
  text.appendChild(select_tab);

  const item_score = document.createElement("h1");
  item_score.id = "prob_score";
  item_score.textContent = data[i].items[ans].score + "点";
  text.appendChild(item_score);

  const text_ele = document.createElement("p");
  text_ele.textContent = "解説：" + data[i].items[ans].description;
  text.appendChild(text_ele);

  const ok_btn = document.getElementById("AnswerPage");
  const ok_ele = document.createElement("button");
  ok_ele.textContent = "次の問題";
  ok_ele.id = "ok";
  ok_ele.onclick = function () {
    const f = document.getElementById("AnswerPage");
    while (f.lastChild) {
      f.removeChild(f.lastChild);
    }
    i++;
    buttonSound();
    if (i < 3) {
      const ctx = canvas.getContext("2d");
      ButtonClick(ctx, i);
      questpage(data, i, score);
    } else {
      finishpage(data, i, score);
    }
  };
  ok_btn.appendChild(ok_ele);
};
