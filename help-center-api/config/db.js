import mongoose from 'mongoose';

const dbConnect = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017');
        console.log("Database connected");
    } catch (err) {
        console.log("Database connection error: ", err);
    }
};

export default dbConnect;
