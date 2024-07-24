import mongoose from "mongoose";

const QuestionSchema = new mongoose.Schema({
  qst_id: { type: Number, required: true },
  qst_content: { type: String, required: true },
});

const PilierSchema = new mongoose.Schema({
  pilier_id: { type: Number, required: true },
  pilier_nom: { type: String, required: true },
  nbr_oq: { type: Number, required: true },
  choice_qsts: [QuestionSchema],
  open_qsts: [QuestionSchema],
});

const PilierModel = mongoose.model("Pilier", PilierSchema);

export default PilierModel;
