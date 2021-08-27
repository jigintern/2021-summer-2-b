export const buttonSound = () => {
  document.getElementById("button_sound").currentTime = 0;
  document.getElementById("button_sound").play();
};

export const answerButtonSound = (score) => {
  if (score == 0) {
    document.getElementById("answer0_sound").currentTime = 0;
    document.getElementById("answer0_sound").play();
  } else if (score == 100) {
    document.getElementById("answer100_sound").currentTime = 0;
    document.getElementById("answer100_sound").play();
  } else {
    document.getElementById("answerelse_sound").currentTime = 0;
    document.getElementById("answerelse_sound").play();
  }
};
