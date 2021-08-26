/**
 * main処理
 */
import { DownDrawCircle,} from "./canvas.js";

const main = () => {
  let push_count = 0;
  let items = [];

  const canvas = document.getElementById("canvas");

  const ctx = canvas.getContext("2d");

  canvas.width = 	document.body.clientWidth; //bodyの横幅
  canvas.height = 100;

  //White_canvas(ctx, canvas.width, canvas.height);
  // UpDrawCircle(ctx, items); //上の円を描画
  DownDrawCircle(ctx); //下の円を描画

  document.getElementById("canvas").style.display = "none";
};

export default main;
