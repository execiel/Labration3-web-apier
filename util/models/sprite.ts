import mongoose, { Schema } from "mongoose";
import { CellData } from "../types";

const spriteSchema = new Schema({
  title: { required: true, type: String },
  alias: { required: true, type: String },
  rating: { default: 0, required: true, type: Number },
  cells: { required: true, type: Array<CellData> },
});

const spriteModel = mongoose.model("Sprite", spriteSchema);

export default spriteModel;
