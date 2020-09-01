const resetCanvas = (context) => {
  if (context){
    context.clearRect(0, 0,window.innerWidth, window.innerHeight);
  }
}

export default resetCanvas;
