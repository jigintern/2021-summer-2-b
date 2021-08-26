import { shuffle } from "../utils/utils.js";
import { questpage } from "./question.js";
import { fetchJSON } from "https://js.sabae.cc/fetchJSON.js";
import { ButtonClick } from "../utils/canvas.js";

export const homepage = () => {
  let i = 0;
  let score = 0;
  let page = document.getElementById("HomePage");

  let modes = document.createElement("div");
  modes.id = "modes";
  page.appendChild(modes);

  let div = document.createElement("div");
  let typhoon = document.createElement("button");
  typhoon.textContent = "台風";
  typhoon.className = "mode";
  typhoon.onclick = async function () {
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
  div.appendChild(typhoon);
  modes.appendChild(div);
  div = document.createElement("div");
  let fire = document.createElement("button");
  fire.textContent = "火災";
  fire.className = "mode";
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
  div.appendChild(fire);
  modes.appendChild(div);
};
