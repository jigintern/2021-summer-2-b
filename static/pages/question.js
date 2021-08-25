import {answerpage} from "./answer.js";

export const  questpage = (data, i, score) =>{
    let question = document.getElementById("QuestionPage");
    let quest_ele = document.createElement("h2");
    quest_ele.id = "question" + i;
    quest_ele.className = "question";
    quest_ele.textContent = data[i].problem;
    question.appendChild(quest_ele);
  
    let j=0;
    while(j != data[i].length){
      let answer = document.getElementById("QuestionPage");
      let ans_ele = document.createElement("h2");
      ans_ele.id = j;
      ans_ele.className = "answer";
      ans_ele.textContent = data[i].items[j].anser_num + data[i].items[j].name;
      ans_ele.onclick = function(){

        let f = document.getElementById("QuestionPage");
        while(f.lastChild){
          f.removeChild(f.lastChild);
        }
        answerpage(data,i,this.id, score);
      }
      answer.appendChild(ans_ele);
      j++;
    }
  }