import { questpage } from "./question.js";
import { ButtonClick } from "../utils/canvas.js";

export const startpage = (categoly, data) =>{
    let i = 0;
    let score = 0;
    let title = document.getElementById("HomePage");
    let title_ele = document.createElement("h1");
    title_ele.textContent=categoly;
    title_ele.id = "explain";
    title.appendChild(title_ele);

    let centence = document.createElement("h2");
    centence.textContent = categoly + "に関するクイズです";
    title.appendChild(centence);
    
    let btn_ele = document.createElement("button");
    btn_ele.textContent = "START";
    btn_ele.onclick = () =>{
        let f = document.getElementById("HomePage");
        while (f.lastChild) {
            f.removeChild(f.lastChild);
        }
        const ctx = canvas.getContext("2d");
        ButtonClick(ctx, 0);
        document.getElementById("canvas").style.display = "block";
        questpage(data, i, score);
        
    }
    title.appendChild(btn_ele);
}