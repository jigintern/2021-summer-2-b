import { shuffle } from "../utils/utils.js";
import { questpage } from "./question.js";
import { fetchJSON } from "https://js.sabae.cc/fetchJSON.js";

export const firstpage = (i, score) => {
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
    questpage(data, i, score);
  };
  testpage.appendChild(fire);
};
