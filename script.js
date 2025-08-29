const upload = document.getElementById("upload");
const editor = document.getElementById("editor");
const output = document.getElementById("output");

let svgElement = null;

upload.addEventListener("change", async (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const text = await file.text();
  editor.innerHTML = text; // render SVG
  svgElement = editor.querySelector("svg");
});

// Convert SVG into React component
document.getElementById("toJS").addEventListener("click", () => {
  if (!svgElement) return alert("Upload an SVG first!");

  const svgCode = svgElement.outerHTML;
  
  const reactSnippet = `
export default function Icon(props) {
  return (
    ${svgCode.replace(/<svg/, "<svg {...props}")}
  )
}
  `.trim();

  output.textContent = reactSnippet;
});
