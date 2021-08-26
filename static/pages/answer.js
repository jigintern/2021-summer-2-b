import { finishpage } from "./finish.js"
import { questpage } from "./question.js";
import { ButtonClick } from "../utils/canvas.js";

export const answerpage = (data,i,ans, score) =>{
    if(ans=="last") ans = data[i].length-1;
    // console.log(i);
    // console.log(data[i].items[ans].name);
    // console.log(data[i].items[ans].score);
    // console.log(data[i].problem);
    score += data[i].items[ans].score;

    let text = document.getElementById("AnswerPage");

    let question_text = document.createElement("h3");
    question_text.textContent = "問題　" + data[i].problem;
    text.appendChild(question_text);

    let select_tab = document.createElement("p");
    select_tab.textContent = "解答　" + data[i].items[ans].name;
    text.appendChild(select_tab);

    let item_score = document.createElement("h1");
    item_score.textContent = data[i].items[ans].score + "点";
    text.appendChild(item_score);

    let text_ele = document.createElement("p");
    text_ele.textContent = "解説　" + data[i].items[ans].description;
    text.appendChild(text_ele);

    let ok_btn = document.getElementById("AnswerPage");
    let ok_ele = document.createElement("button");
    ok_ele.textContent = "OK";
    ok_ele.id = "ok"
    ok_ele.onclick = function(){
      let f = document.getElementById("AnswerPage");
      while(f.lastChild){
        f.removeChild(f.lastChild);
      }
      const ctx = canvas.getContext("2d");
      i++;
      if(i<3){
        ButtonClick(ctx, i);
        questpage(data,i,score);
      }else{
        console.log(score);
        const ctx = canvas.getContext("2d");
        finishpage(data, i, score);
      }
    }
    ok_btn.appendChild(ok_ele);
  }
