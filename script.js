// Create visible SVG canvas
const draw = SVG().addTo('#editor').size(400, 400).viewbox(0, 0, 400, 400);

// Background so canvas is always visible
const bg = draw.rect(400, 400).fill('#2a2a2a').back();

let selectedShape = null; // track selected shape

// Make a shape draggable, resizable, and selectable
function makeInteractive(shape) {
  shape.draggable().resize({
    constraint: { minWidth: 20, minHeight: 20 },
    handles: ['tl', 'tr', 'bl', 'br'] // only corner handles
  });

  shape.on("click", () => {
    if (selectedShape) selectedShape.stroke({ color: null });
    selectedShape = shape;
    shape.front().stroke({ color: "yellow", width: 2 }); // highlight
  });
}

// Add rectangle
document.getElementById("addRect").addEventListener("click", () => {
  const rect = draw.rect(100, 60).move(50, 50).fill('skyblue');
  makeInteractive(rect);
});

// Add circle
document.getElementById("addCircle").addEventListener("click", () => {
  const circle = draw.circle(80).move(150, 150).fill('lightgreen');
  makeInteractive(circle);
});

// Duplicate selected shape
document.getElementById("duplicate").addEventListener("click", () => {
  if (!selectedShape) return alert("Select a shape first!");
  const clone = selectedShape.clone().move(selectedShape.x() + 20, selectedShape.y() + 20);
  makeInteractive(clone);
  selectedShape.stroke({ color: null }); // remove highlight from old
  selectedShape = clone;
  clone.stroke({ color: "yellow", width: 2 });
});

// Clear canvas (reset background)
document.getElementById("clear").addEventListener("click", () => {
  draw.clear();
  draw.rect(400, 400).fill('#2a2a2a').back(); // redraw background
  selectedShape = null;
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
