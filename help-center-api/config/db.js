import mongoose from 'mongoose';

const dbConnect = async () => {
    try {
        await mongoose.connect('mongodb+srv://alhanhussain75:alhan@cluster0.ln1rnm1.mongodb.net/');
        console.log("Database connected");
    } catch (err) {
        console.log("Database connection error: ", err);
    }
};

export default dbConnect;
