import { questpage } from "./question.js";
import { ButtonClick } from "../utils/canvas.js";
import { homepage } from "./home.js";

export const startpage = (category, data) => {
  let i = 0;
  let score = 0;
  let page = document.getElementById("StartPage");

  let title_ele = document.createElement("h1");
  title_ele.textContent = category;
  title_ele.id = "explain";
  page.appendChild(title_ele);

  let centence = document.createElement("h2");
  centence.textContent = category + "に関するクイズです";
  page.appendChild(centence);

  let choices = document.createElement("div");
  choices.id = "choices";
  page.appendChild(choices);

  let div = document.createElement("div");
  let start_btn_ele = document.createElement("button");
  start_btn_ele.textContent = "START";
  start_btn_ele.onclick = () => {
    let f = document.getElementById("StartPage");
    while (f.lastChild) {
      f.removeChild(f.lastChild);
    }
    const ctx = canvas.getContext("2d");
    ButtonClick(ctx, 0);
    document.getElementById("canvas").style.display = "block";
    questpage(data, i, score);
  };
  div.appendChild(start_btn_ele);
  choices.appendChild(div);

  div = document.createElement("div");
  let back_btn_ele = document.createElement("button");
  back_btn_ele.textContent = "もどる";
  back_btn_ele.onclick = () => {
    let f = document.getElementById("StartPage");
    while (f.lastChild) {
      f.removeChild(f.lastChild);
    }
    homepage();
  };
  div.appendChild(back_btn_ele);
  choices.appendChild(div);
};
