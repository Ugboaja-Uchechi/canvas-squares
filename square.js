const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [2048, 1080]
};

//gap is the margin between shapes
//off is the padding between them

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'black';
    context.fillRect(0, 0, width, height);
    context.strokeStyle = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    context.lineWidth = width * 0.001;

    const w = width * 0.10;
    const h = width * 0.10;
    const gap = width * 0.01;
    const ix = width * 0.122;
    const iy = height * 0.188;

    const off = width * 0.03;

    let x, y;

    for (let i = 0; i < 7; i++) {
      for (let j = 0; j < 3; j++) {
        x = ix + (w + gap) * i;
        y = iy + (h + gap) * j;

        context.beginPath();
        context.rect(x, y, w, h);
        context.stroke();

        context.beginPath();
        context.rect(x + off, y + off, w - off, h - off);
        context.strokeStyle = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        context.stroke();

        context.beginPath();
        context.rect(x + off / 2, y + off / 2, w - off, h - off);
        context.strokeStyle = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        context.stroke();

        context.beginPath();
        context.rect(x + off, y + off, w, h);
        context.strokeStyle = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        context.stroke();

        context.beginPath();
        context.rect(x - off, y - off, w - off, h - off);
        context.strokeStyle = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        context.stroke();
      }
    }



  };
};

canvasSketch(sketch, settings);
