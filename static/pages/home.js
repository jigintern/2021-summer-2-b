import { shuffle } from "../utils/utils.js";
import { questpage } from "./question.js";
import { fetchJSON } from "https://js.sabae.cc/fetchJSON.js";
import { ButtonClick } from "../utils/canvas.js";

export const homepage = () => {
  let i = 0;
  let score = 0;
  let testpage = document.getElementById("HomePage");
  let element = document.createElement("h2");
  element.textContent = "台風";
  element.onclick = async function () {
    const { data } = await fetchJSON("/api/events?subject=typhoon");
    shuffle(data);
    let f = document.getElementById("HomePage");
    while (f.lastChild) {
      f.removeChild(f.lastChild);
    }
    const ctx = canvas.getContext("2d");
    ButtonClick(ctx, 0);
    document.getElementById("canvas").style.display = "block";
    questpage(data, i, score);
  };
  testpage.appendChild(element);
  let fire = document.createElement("h2");
  fire.textContent = "火災";
  fire.onclick = async function () {
    const { data } = await fetchJSON("/api/events?subject=fire");
    shuffle(data);
    let f = document.getElementById("HomePage");
    while (f.lastChild) {
      f.removeChild(f.lastChild);
    }
    const ctx = canvas.getContext("2d");
    ButtonClick(ctx, 0);
    document.getElementById("canvas").style.display = "block";
    questpage(data, i, score);
  };

  testpage.appendChild(fire);
};
