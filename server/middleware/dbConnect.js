import mongoose from 'mongoose';

export default defineEventHandler((event) => {
  mongoose.connect(
    'mongodb+srv://admin:MFVf5NbKuXRXWlq9@ppp-cluster.kvhn7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
  );
});
