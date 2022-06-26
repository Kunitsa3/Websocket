import Jimp from 'jimp';
import robot from 'robotjs';
import { WebSocket } from 'ws';

export const getScreen = (currentX: number, currentY: number, ws: WebSocket) => {
  try {
    const picture = robot.screen.capture(currentX, currentY, 200, 200);
    const image = new Jimp(picture.width, picture.height, function (err, img) {
      img.bitmap.data = picture.image;
      image.getBase64(Jimp.MIME_PNG, (_, img) => {
        ws.send(`prnt_scrn ${img.replace('data:image/png;base64,', '')}`);
      });
    });
  } catch (e) {
    console.error(e);
  }
};

