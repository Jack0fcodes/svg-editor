// Create SVG canvas
const draw = SVG().addTo('#editor').size(400, 400).viewbox(0, 0, 400, 400);
draw.rect(400, 400).fill('#2a2a2a'); // background

document.getElementById("addRect").addEventListener("click", () => {
  const rect = draw.rect(100, 60).move(50, 50).fill('skyblue');
  rect.draggable().resize();
});

document.getElementById("addCircle").addEventListener("click", () => {
  const circle = draw.circle(80).move(150, 150).fill('lightgreen');
  circle.draggable().resize();
});

document.getElementById("clear").addEventListener("click", () => {
  draw.clear();
  draw.rect(400, 400).fill('#2a2a2a'); // redraw background
});

document.getElementById("toJS").addEventListener("click", () => {
  const svgCode = draw.svg();

  const reactSnippet = `
export default function Icon(props) {
  return (
    ${svgCode.replace(/<svg/, "<svg {...props}")}
  )
}
  `.trim();

  document.getElementById("output").textContent = reactSnippet;
});
