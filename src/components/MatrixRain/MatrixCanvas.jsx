import React from "react";

class MatrixCanvas extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.w = window.innerWidth;
    this.h = window.innerHeight;
    this.cols = Math.floor(this.w / 15) + 1;
    this.ypos = Array(this.cols).fill(0);
    this.getCanvas = () => document.querySelector("canvas").getContext("2d");
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.updateCanvas();
    }, 50);
    return () => clearInterval(this.interval);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  updateCanvas() {
    this.w = window.innerWidth;
    this.h = window.innerHeight;
    const ctx = this.getCanvas();
    ctx.fillStyle = this.props.active_theme.background;

    ctx.fillRect(0, 0, this.w, this.h);
    // ctx.fillStyle = this.props.active_theme.onBackground;
    ctx.fillStyle = this.props.active_theme.primaryVariant;
    ctx.font = "15pt monospace";
    this.ypos.forEach((y, ind) => {
      const text = String.fromCharCode(Math.random() * 128);
      const x = ind * 20;
      ctx.fillText(text, x, y);
      if (y > 100 + Math.random() * 10000) this.ypos[ind] = 0;
      else this.ypos[ind] = y + 20;
    });
  }
  render() {
    return (
      <canvas
        ref={this.canvasRef}
        width={this.w}
        height={this.h}
        style={{ position: "fixed", top: 0, left: 0, zIndex: -1 }}
      />
    );
  }
}
export default MatrixCanvas;
