// Create visible SVG canvas
const draw = SVG().addTo('#editor').size(400, 400).viewbox(0, 0, 400, 400);

// Draw background rect (so canvas is always visible)
const bg = draw.rect(400, 400).fill('#2a2a2a');
bg.back(); // keep background at the bottom

// Add Rectangle
document.getElementById("addRect").addEventListener("click", () => {
  const rect = draw.rect(100, 60).move(50, 50).fill('skyblue');
  rect.draggable().resize();
});

// Add Circle
document.getElementById("addCircle").addEventListener("click", () => {
  const circle = draw.circle(80).move(150, 150).fill('lightgreen');
  circle.draggable().resize();
});

// Clear all shapes but keep background
document.getElementById("clear").addEventListener("click", () => {
  draw.clear();
  draw.rect(400, 400).fill('#2a2a2a'); // redraw background
});

// Export to React component
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
