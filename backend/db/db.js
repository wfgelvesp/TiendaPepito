import mongoose from"mongoose"

const dbConnection=async()=>{
    try {
        await mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser:true,useUnifiedTopology:true,});
        console.log("connection ok with DB");
    } catch (error) {
        console.log("Error connecting to MongoDB "+error);
    }    
}

export default{dbConnection};