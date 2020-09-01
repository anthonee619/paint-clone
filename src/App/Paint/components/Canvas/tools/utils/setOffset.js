export default (canvasRef) => {
  return { 
        left: canvasRef.current.offsetLeft,
        top: canvasRef.current.offsetTop 
  }
}
