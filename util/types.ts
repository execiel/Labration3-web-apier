interface CellData {
  x: Number;
  y: Number;
  color: String;
}

interface PublishData {
  title: String;
  alias: String;
  cells: [CellData];
}

export { CellData, PublishData };
