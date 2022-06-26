import robot from 'robotjs';

export const drawSquare = (sideLength: number) => {
  const mousePos = robot.getMousePos();

  let x = mousePos.x;
  let y = mousePos.y;

  x += sideLength;
  robot.moveMouseSmooth(x, y);
  y -= sideLength;
  robot.moveMouseSmooth(x, y);
  x -= sideLength;
  robot.moveMouseSmooth(x, y);
  y += sideLength;
  robot.moveMouseSmooth(x, y);
};
