export const Equilateral = {
  givenHeightCalcSide: (height) => (height * (2/Math.sqrt(3))),
  givenSlopeAndDistanceCalcDelta: (slope, distance) => {
    const r = Math.sqrt(1 + Math.pow(slope, 2));
    const dx = distance / r;
    const dy = (distance * slope) / r;

    return { dx, dy } 

  },
}





