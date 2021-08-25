import { ChangeCircleColor } from "./canvas.js";

/**
 * オブジェクトのベースとなるクラス
 */
class BaseObject {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  // 初期表示
  draw(ctx) {}
  // 自オブジェクトがクリックされたかどうか判定
  testHit(point) {}
  // クリックされたときの処理
  clicked(ctx) {}
}

/**
 * 円オブジェクトのクラス
 */
class Circle extends BaseObject {
  constructor(x, y, r) {
    super(x, y);
    this.r = r;
  }

  draw(ctx) {
    // 上の丸
    ctx.save();
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.restore();
  }

  clicked(ctx, push_count) {
    ctx.save();
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.restore();

    ChangeCircleColor(ctx, push_count); //下の円の色を変える
  }

  testHit(point) {
    return (
      Math.pow(this.x - point.x, 2) + Math.pow(this.y - point.y, 2) <=
        Math.pow(this.r, 2)
    );
  }
}

export default Circle;
