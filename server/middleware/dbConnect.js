import mongoose from 'mongoose';

export default defineEventHandler((event) => {
	mongoose.connect(
		'mongodb+srv://dbUser:2nt1hlXDZmMJ8W3W@cluster0.riqez.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
	);
});
