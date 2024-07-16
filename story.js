const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 2000, 2000 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'black';
    context.fillRect(0, 0, width, height);
    context.strokeStyle = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    context.lineWidth = width * 0.002;

    const w = width * 0.15;
    const h = width * 0.15;
    const gap = width * 0.04;
    const ix = width * 0.06;
    const iy = height * 0.05;

    const off = width * 0.045;

    let x, y;

    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        x = ix + (w + gap) * i;
        y = iy + (h + gap) * j;

        context.beginPath();
        context.rect(x, y, w, h);
        context.stroke();

        context.beginPath();
        context.rect(x + off / 4 , y + off / 4 , w - off, h - off);
        context.strokeStyle = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        context.stroke();
        
        context.beginPath();
        context.rect(x + off / 20 , y + off / 20 , w - off, h - off);
        context.strokeStyle = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        context.stroke();

        context.stroke();
        context.beginPath();
        context.rect(x + off / 16 , y + off / 16, w - off, h - off);
        context.strokeStyle = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        context.stroke();

        // centers it
        context.beginPath();
        context.rect(x + off / 2, y + off / 2, w - off, h - off);
        context.strokeStyle = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        context.stroke();

        context.beginPath();
        context.rect(x - off / 2 , y - off / 2 , w - off, h - off);
        context.strokeStyle = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        context.stroke();

        context.beginPath();
        context.rect(x - off / 4 , y - off / 4 , w - off, h - off);
        context.strokeStyle = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        context.stroke();

        context.beginPath();
        context.rect(x - off / 20 , y - off / 20 , w - off, h - off);
        context.strokeStyle = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        context.stroke();

        context.beginPath();
        context.rect(x - off / 16 , y - off / 16 , w - off, h - off);
        context.strokeStyle = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        context.stroke();
      }
    }



  };
};

canvasSketch(sketch, settings);
