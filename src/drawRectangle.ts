import robot from 'robotjs';

export const drawRectangle = (firstSide: number, secondSide: number) => {
  const mousePos = robot.getMousePos();

  let x = mousePos.x;
  let y = mousePos.y;

  x += firstSide;
  robot.moveMouseSmooth(x, y);
  y -= secondSide;
  robot.moveMouseSmooth(x, y);
  x -= firstSide;
  robot.moveMouseSmooth(x, y);
  y += secondSide;
  robot.moveMouseSmooth(x, y);
};

