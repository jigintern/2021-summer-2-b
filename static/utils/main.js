/**
 * main処理
 */
import { DownDrawCircle, UpDrawCircle, White_canvas } from "./canvas.js";

const main = () => {
  let push_count = 0;
  let items = [];

  const canvas = document.getElementById("app");

  canvas.width = 640;
  canvas.height = 480;

  const ctx = canvas.getContext("2d");

  White_canvas(ctx, canvas.width, canvas.height);
  UpDrawCircle(ctx, items); //上の円を描画
  DownDrawCircle(ctx); //下の円を描画

  canvas.addEventListener("click", (e) => {
    // マウスの座標をCanvas内の座標とあわせるため
    const rect = canvas.getBoundingClientRect();
    const point = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };

    items.forEach((item) => {
      if (item.testHit(point)) {
        push_count += 1; //押した回数
        item.clicked(ctx, push_count);
      }
    });
  });
};

export default main;
