import p5 from "p5";

const sketch = (p: p5) => {
  p.setup = () => {
    p.createCanvas(window.innerWidth / 2, window.innerHeight / 2);
    p.background(255, 0, 0);
  };

  p.draw = () => {};
};

export default sketch;
