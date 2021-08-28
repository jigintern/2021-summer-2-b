import { shuffle } from "../utils/utils.js";
import { fetchJSON } from "https://js.sabae.cc/fetchJSON.js";
import { startpage } from "./start.js";
import { buttonSound } from "../utils/sound.js";

export const homepage = () => {
  const page = document.getElementById("HomePage");

  const div1 = document.createElement("div");
  const logo_pic = document.createElement("img");
  logo_pic.src = "../img/logo.png";
  logo_pic.width = 200;
  div1.appendChild(logo_pic);
  page.appendChild(div1);

  const modes = document.createElement("div");
  modes.id = "modes";
  page.appendChild(modes);

  const div2 = document.createElement("div");
  const typhoon = document.createElement("button");
  typhoon.textContent = "台風";
  typhoon.onclick = async function () {
    const { data } = await fetchJSON("/api/events?subject=typhoon");
    shuffle(data);
    const f = document.getElementById("HomePage");
    while (f.lastChild) {
      f.removeChild(f.lastChild);
    }
    buttonSound();
    startpage(this.textContent, data);
  };
  div2.appendChild(typhoon);
  modes.appendChild(div2);
  const div3 = document.createElement("div");
  const fire = document.createElement("button");
  fire.textContent = "火災";
  fire.onclick = async function () {
    const { data } = await fetchJSON("/api/events?subject=fire");
    shuffle(data);
    const f = document.getElementById("HomePage");
    while (f.lastChild) {
      f.removeChild(f.lastChild);
    }
    buttonSound();
    startpage(this.textContent, data);
  };
  div3.appendChild(fire);
  modes.appendChild(div3);
};
