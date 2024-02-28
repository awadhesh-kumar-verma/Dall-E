import mongoose from 'mongoose';

const connectDB = (url) => {
    // console.log('MongoDB URL:', url);
    mongoose.set('strictQuery', true);

    mongoose.connect(url)
        .then(() => console.log('MongoDB connected'))
        .catch((err) => console.log(err));
}

export default connectDB;