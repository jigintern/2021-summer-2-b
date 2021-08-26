import { finishpage } from "./finish.js"
import { questpage } from "./question.js";
import { ButtonClick } from "../utils/canvas.js";

export const answerpage = (data,i,ans, score) =>{
    if(ans=="last") ans=data[i].length-1;
    console.log(i);
    console.log(data[i].items[ans].name);
    console.log(data[i].items[ans].score);
    score += data[i].items[ans].score;

    let text = document.getElementById("AnswerPage");

    let item_score = document.createElement("h2");
    item_score.textContent = data[i].items[ans].score + "点";
    text.appendChild(item_score);

    let text_ele = document.createElement("h4");
    text_ele.textContent = data[i].items[ans].description;
    text.appendChild(text_ele);

    let ok_btn = document.getElementById("AnswerPage");
    let ok_ele = document.createElement("h2");
    ok_ele.textContent = "OK";
    ok_ele.id = "ok"
    ok_ele.onclick = function(){
      let f = document.getElementById("AnswerPage");
        while(f.lastChild){
          f.removeChild(f.lastChild);
        }
    const ctx = canvas.getContext("2d");
    i++;
    ButtonClick(ctx, i+1);
      if(i<3){
        questpage(data,i,score);
      }else{
        console.log(score);
        const ctx = canvas.getContext("2d");
        finishpage(data, i, score);
      }
    }
    ok_btn.appendChild(ok_ele);
  }