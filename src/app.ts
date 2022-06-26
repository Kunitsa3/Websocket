import WebSocket from 'ws';
import robot from 'robotjs';
import { drawCircle } from './drawCircle';
import { getScreen } from './getScreen';
import { drawRectangle } from './drawRectangle';
import { drawSquare } from './drawSquare';

const server = new WebSocket.Server({ port: 8080 });

server.on('connection', async ws => {
  ws.on('message', data => {
    const mouse = robot.getMousePos();
    let currentX = mouse.x;
    let currentY = mouse.y;

    const [command, value, secondValue] = data?.toString()?.split(' ');

    switch (command) {
      case 'mouse_right':
        robot.moveMouse(currentX + +value, currentY);
        ws.send(command);
        break;

      case 'mouse_left':
        robot.moveMouse(currentX - +value, currentY);
        ws.send(command);
        break;

      case 'mouse_up':
        robot.moveMouse(currentX, currentY - +value);
        ws.send(command);
        break;

      case 'mouse_down':
        robot.moveMouse(currentX, currentY + +value);
        ws.send(command);
        break;

      case 'mouse_position':
        ws.send(`mouse_position ${currentX},${currentY}`);
        break;

      case 'draw_circle':
        drawCircle(+value);
        ws.send(command);
        break;

      case 'draw_square':
        drawSquare(+value);
        ws.send(command);
        break;

      case 'draw_rectangle':
        drawRectangle(+value, +secondValue);
        ws.send(command);
        break;

      case 'prnt_scrn':
        getScreen(currentX, currentY, ws);
        break;
    }
  });
});

server.on('close', () => {});

