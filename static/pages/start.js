import { ButtonClick } from "../utils/canvas.js";
import {shuffle} from "../utils/utils.js";
import {questpage} from "./question.js";

export const firstpage = (data, i, score) => {
    shuffle(data);
    let testpage = document.getElementById("QuestionPage");
    let element = document.createElement("h2");
    element.textContent = "台風";
    element.onclick = function(){

      let f = document.getElementById("QuestionPage");
      while(f.lastChild){
        f.removeChild(f.lastChild);
      }
      const ctx = canvas.getContext("2d");
      document.getElementById("canvas").style.display = "block";
      questpage(data,i,score);
    }
    testpage.appendChild(element);
  }
