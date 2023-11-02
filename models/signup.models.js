import mongoose from "mongoose";
const signupSchme = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },

  mobile: {
    type: Number,
    required: true,
  },
});
const user= mongoose.model("signupSchmes",signupSchme)
export default user;