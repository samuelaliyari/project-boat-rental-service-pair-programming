import mongoose, { Schema } from 'mongoose';

const bookingSchema = new Schema({
    bookingNumber: { type: Number, default: Date.now()},
    firstName: { type: String, required: true},
    lastName: { type: String, required: true},
    phone: { type: Number, required: true},
    email: { type: String, required: true},
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    boatId: { type: String, required: true}
}, { collection: 'bookings', timestamps: true});

export const Booking = mongoose.model('Booking', bookingSchema);