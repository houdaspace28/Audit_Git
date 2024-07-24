import mongoose from "mongoose";

const URI = process.env.DB2URI || "";

const connectDB = async ()=>{
    try{
        await mongoose.connect(URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB Atlas");
      }catch(err){
        console.log(err.message);
        process.exit(1);
      }
};

export default connectDB;