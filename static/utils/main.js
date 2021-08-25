/**
 * main処理
 */
import { DownDrawCircle, White_canvas, ButtonClick } from "./canvas.js";

const main = () => {
  let push_count = 0;
  let items = [];

  const canvas = document.getElementById("canvas");
  const button = document.getElementById("button");

  canvas.width = 640;
  canvas.height = 200;

  const ctx = canvas.getContext("2d");

  White_canvas(ctx, canvas.width, canvas.height);
  // UpDrawCircle(ctx, items); //上の円を描画
  DownDrawCircle(ctx); //下の円を描画

  //buttonを押した時の処理
  button.addEventListener('click', function(){
    push_count += 1;
    ButtonClick(ctx, push_count);
  });
};

export default main;
