import mongoose from "mongoose";

const StarShipSchema = new mongoose.Schema(
  {    
    uid: {
      type: String, 
      required: true         
    },  
    name: {
      type: String,
      required: true     
    },
    count: {
      type: Number,
      default:0  
    },
    url:{
      type: String     
    }    
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    timestamps: true,
  }
);


const starShip = mongoose.model("starShip", StarShipSchema);

export default starShip;
