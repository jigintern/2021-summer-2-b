import { DownDrawCircle } from "../utils/canvas.js";
import {homepage} from "./home.js";

export const finishpage = (data, i, score) => {
  let _finishpage = document.getElementById("FinishPage");
  let _finish_ele = document.createElement("h4");

  _finish_ele.id = "announce";
  _finish_ele.textContent = "あなたの点数は";
  _finishpage.appendChild(_finish_ele);

  let score_ele = document.createElement("h2");
  score_ele.id = "score";
  score_ele.textContent = `${score}点`;
  _finishpage.appendChild(score_ele);

  let back_button_ele = document.createElement("buttton");
  back_button_ele.id = "back_home_button";
  back_button_ele.textContent = "もどる";
  back_button_ele.onclick = () => {
    let f = document.getElementById("FinishPage");
    while(f.lastChild){
      f.removeChild(f.lastChild);
    }

    const ctx = canvas.getContext("2d");
    DownDrawCircle(ctx);
    document.getElementById("canvas").style.display = "none";
    homepage();
  }
  _finishpage.appendChild(back_button_ele);
}
