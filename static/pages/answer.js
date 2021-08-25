import { finishpage } from "./finish.js"
import { questpage } from "./question.js";

export const answerpage = (data,i,ans, score) =>{

    console.log(i);
    console.log(data[i].items[ans].name);
    console.log(data[i].items[ans].score);
    score += data[i].items[ans].score;

    let text = document.getElementById("AnswerPage");

    let item_score = document.createElement("h2");
    item_score.textContent = data[i].items[ans].score + "点";
    text.appendChild(item_score);

    let text_ele = document.createElement("h2");
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

      if(i<3){
        questpage(data,i,score);
      }else{
        console.log(score);
        finishpage(data, i, score);
      }
    }
    ok_btn.appendChild(ok_ele);
    i++;
  }