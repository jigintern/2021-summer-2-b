// import Circle from "./class.js";

const Num_of_questions = 5; //問題数


// canvasを白く戻す関数
export const White_canvas = (ctx, x, y) => {
  ctx.save();
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, x, y);
  ctx.restore();
};

// 上の円を表示する関数（オブジェクト別）
// export const UpDrawCircle = (ctx, items) => {
//   [...Array(Num_of_questions)].forEach((_, index) => {
//     const x = 100 + index * 100;
//     const y = 100;

//     const circle = new Circle(x, y, 25);
//     items.push(circle);
//   });

//   // オブジェクトを描画する関数
//   items.forEach((item) => item.draw(ctx));
// };

// 下の円を表示する関数
export const DownDrawCircle = (ctx) => {
  for (let i = 0; i < Num_of_questions; i++) {
    let xpoint = i * 100;
    ctx.fillStyle = "#BBBBBB";
    if (i === 0 || i === Num_of_questions - 1) {
      ctx.arc(
        100 + xpoint,
        100,
        20,
        0 * Math.PI / 180,
        360 * Math.PI / 180,
        false,
      );
    } else {
      ctx.arc(
        100 + xpoint,
        100,
        15,
        0 * Math.PI / 180,
        360 * Math.PI / 180,
        false,
      );
    }
    ctx.fill();
    // if (i != Num_of_questions - 1) {
    //   DrawHorizontalLine(ctx, 100 + xpoint, 100); //直線の描画
    // }
  }
};

//下の円の色を変える関数
export const ChangeCircleColor = (ctx, push_count) => {
  ctx.save();
  ctx.beginPath();
  if (push_count === 0 || push_count === Num_of_questions - 1) {
    ctx.arc(
      100 * (push_count + 1),
      100,
      20,
      0,
      Math.PI * 2,
      true
    );
  } else {
    ctx.arc(
      100 * (push_count + 1),
      100,
      15,
      0,
      Math.PI * 2,
      true
    );
  }
  ctx.fillStyle = "#3399CC";
  ctx.fill();
  ctx.restore();
};

// 直線をかく関数
// export const DrawHorizontalLine = (ctx, x, y) => {
//   ctx.strokeStyle = "#BBBBBB";
//   ctx.lineWidth = 10;
//   ctx.beginPath();
//   ctx.moveTo(x, y);
//   ctx.lineTo(x + 100, y);
//   ctx.closePath();
//   ctx.stroke();
// };

// ボタンを押した時の処理
export const ButtonClick = (ctx, push_count) => {
  if (push_count < Num_of_questions) {
    console.log("aaa");
    ChangeCircleColor(ctx, push_count);
  }
};
