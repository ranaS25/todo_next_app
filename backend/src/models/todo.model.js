import mongoose from "mongoose";
import mongooseDateFormat from "mongoose-date-format";

const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

todoSchema.plugin(mongooseDateFormat, {
  dateFormat: "DD-MM-YYYY",
});


export const Todo = mongoose.model("Todo", todoSchema);
