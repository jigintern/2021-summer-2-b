// シャッフル
export const shuffle = (array) => {
  let currentIndex = array.length;

  while (currentIndex != 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // 配列の二つの数字を交換
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};
