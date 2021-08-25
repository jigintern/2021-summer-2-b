/**
 * main処理
 */
import { DownDrawCircle, White_canvas, ButtonClick } from "./canvas.js";

const main = () => {
  let push_count = 0;
  let items = [];

  const canvas = document.getElementById("canvas");
  const button = document.getElementById("button");

  const ctx = canvas.getContext("2d");

  canvas.width = 	document.body.clientWidth; //bodyの横幅
  canvas.height = 110;

  White_canvas(ctx, canvas.width, canvas.height);
  // UpDrawCircle(ctx, items); //上の円を描画
  DownDrawCircle(ctx); //下の円を描画

  //buttonを押した時の処理
  button.addEventListener('click', function () {
    ButtonClick(ctx, push_count);
    push_count += 1;
  });
};

export default main;
