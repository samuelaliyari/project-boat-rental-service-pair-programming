import mongoose, { Schema } from 'mongoose';

const day = new Date;
const currentYear = day.getFullYear();

const boatSchema = new Schema({
    name: { type: String, required: true },
    image: { type: String },
    productionYear: { type: Number, min: 1900, max: currentYear, required: true },
    serialNumber: { type: String, required: true },
    material: { type: String, required: true },
    boatType: { type: String, required: true },
    available: { type: Boolean, default: true }
}, { collection: 'boats', timestamps: true });

export const Boat = mongoose.model('Boat', boatSchema);