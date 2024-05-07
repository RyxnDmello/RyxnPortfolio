import { Schema, model } from "mongoose";

const commentSchema = new Schema({
  email: {
    type: Schema.Types.String,
    required: true,
  },
  name: {
    type: Schema.Types.String,
    required: true,
  },
  number: {
    type: Schema.Types.Number,
    required: false,
  },
  designation: {
    type: Schema.Types.String,
    required: false,
  },
  description: {
    type: Schema.Types.String,
    required: true,
  },
});

const commentModel = model("comment", commentSchema);

export default commentModel;
