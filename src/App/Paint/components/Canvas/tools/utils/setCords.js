const setCords = (e, offset) => {
  return {x: e.clientX - offset.left, y: e.clientY-offset.top};
}

export default setCords;
