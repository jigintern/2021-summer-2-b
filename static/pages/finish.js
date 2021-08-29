import { DownDrawCircle } from "../utils/canvas.js";
import { buttonSound } from "../utils/sound.js";

import { homepage } from "./home.js";

export const finishpage = (data, i, score) => {
  const _finishpage = document.getElementById("FinishPage");
  const _finish_ele = document.createElement("h4");

  _finish_ele.id = "announce";
  _finish_ele.textContent = "あなたの点数は";
  _finishpage.appendChild(_finish_ele);

  const score_ele = document.createElement("h2");
  score_ele.id = "all_score";
  score_ele.textContent = `${score}点`;
  _finishpage.appendChild(score_ele);

  const back_button_ele = document.createElement("button");
  back_button_ele.id = "back_home_button";
  back_button_ele.textContent = "もどる";
  back_button_ele.onclick = () => {
    const f = document.getElementById("FinishPage");
    while (f.lastChild) {
      f.removeChild(f.lastChild);
    }

    const ctx = canvas.getContext("2d");
    DownDrawCircle(ctx);
    document.getElementById("canvas").style.display = "none";
    buttonSound();
    homepage();
  };
  _finishpage.appendChild(back_button_ele);
};
