/* General page styling */
body {
  background: #1c1c1c;
  color: #f1f1f1;
  font-family: sans-serif;
  text-align: center;
  margin: 0;
  padding: 20px;
}

/* Toolbar */
.toolbar {
  margin-bottom: 1rem;
}

.toolbar button {
  background: #333;
  color: #fff;
  border: none;
  padding: 8px 14px;
  margin: 4px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.2s;
}

.toolbar button:hover {
  background: #555;
}

/* Editor container */
#editor {
  display: flex;
  justify-content: center;
  margin: 0 auto 1rem auto;
  width: 420px;
  height: 420px;
  background: #2a2a2a;
  border: 2px dashed #555;
  border-radius: 10px;
  padding: 10px;
}

/* SVG canvas inside editor */
#editor svg {
  display: block;
  width: 100%;
  height: 100%;
}

/* Code output box */
pre {
  text-align: left;
  background: #111;
  padding: 1rem;
  overflow-x: auto;
  border-radius: 8px;
  max-width: 800px;
  margin: 0 auto;
  color: #0f0;
  font-family: monospace;
  font-size: 14px;
}
