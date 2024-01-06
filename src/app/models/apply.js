import mongoose, { Schema } from "mongoose";

const applySchema = mongoose.models.Apply
  ? mongoose.model("Apply").schema
  : new Schema({
      firstName: {
        type: String,
        trim: true,
        minLength: [2, "Name must be longer than 2 characters"],
        maxLength: [50, "Name must be less than 50 characters"],
      },
      lastName: {
        type: String,
        trim: true,
        minLength: [2, "Surname must be longer than 2 characters"],
        maxLength: [50, "Surname must be less than 50 characters"],
      },
      email: {
        type: String,
        match: [
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
          "Invalid email address",
        ],
        required: [true, "Email is required"],
        unique: [true, "Email has already been used"],
      },

      phone: {
        type: String,
        minLength: [10, "Number must be longer than 9"],
        maxLength: [13, "Number must be shorter than 14"],
      },
      area: {
        type: String,
        trim: true,
        minLength: [2, "Area must be longer than 2 characters"],
        maxLength: [200, "Area must be less than 200 characters"],
      },
      rent: {
        type: Number,
        trim: true,
        min: [100, "Rent must be greater than R100"],
        required: [true, "Rent is required"],
      },
      date: {
        type: Date,
        default: Date.now,
      },
    });

const Apply = mongoose.Apply || mongoose.model("Apply", applySchema);

export default Apply;
