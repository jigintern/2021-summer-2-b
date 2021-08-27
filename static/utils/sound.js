const buttonSound = () =>{
    document.getElementById('sound-file').currentTime = 0;
    document.getElementById('sound-file').play();
}

export default buttonSound