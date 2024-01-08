const container = document.querySelector("#previews-container");

function displayPreviews(sprites) {
  container.innerHTML = "";

  let newRowCounter = 0;
  let rowDiv = createRowDiv();

  for (let sprite of sprites) {
    newRowCounter++;

    // Create div for preview
    const previewDiv = document.createElement("div");
    previewDiv.id = "preview-div";

    // Format and create title element
    let title = sprite.title;
    title = title.length > 7 ? title.substr(0, 7) + "..." : title;

    const previewTitle = document.createElement("h5");
    previewTitle.append(document.createTextNode(title));

    // Format and create alias element
    let alias = sprite.alias;
    alias = alias.length > 10 ? alias.substr(0, 10) + "..." : alias;

    const previewAlias = document.createElement("p");
    previewAlias.append(document.createTextNode(`By: ${sprite.alias}`));

    // Create canvas sprite preview
    const preview = createSpritePreview(sprite.cells);

    previewDiv.append(preview, previewTitle, previewAlias);

    rowDiv.append(previewDiv);

    if (newRowCounter >= 5) {
      container.appendChild(rowDiv);
      rowDiv = createRowDiv();
      newRowCounter = 0;
    }
  }
  container.append(rowDiv);
}

function createSpritePreview(cells) {
  const canvas = document.createElement("canvas");
  canvas.id = "preview-canvas";
  canvas.width = 128;
  canvas.height = 128;

  const context = canvas.getContext("2d");

  const cellSize = canvas.width / Math.sqrt(cells.length);

  for (let cell of cells) {
    context.fillStyle = cell.color;
    context.fillRect(cell.x * cellSize, cell.y * cellSize, cellSize, cellSize);
  }

  return canvas;
}

function createRowDiv() {
  const rowDiv = document.createElement("div");
  rowDiv.id = "row-div";
  return rowDiv;
}
