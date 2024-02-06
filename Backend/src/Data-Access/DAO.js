import mongoose from "mongoose";
import { Boat } from "../model/Boat.js"
import { Booking } from "../model/Booking.js";

export const getAll = async (collection) => {
    if (collection === 'boats') {
        const data = await Boat.find();
        return data;
    };
    if (collection === 'bookings') {
        const data = await Booking.find();
        return data;
    };
};

export const getOneById = async (collection, id) => {
    if (collection === 'boats') {
        const data = await Boat.findOne({ _id: mongoose.Types.ObjectId.createFromHexString(id) });
        return data;
    };
    if (collection === 'bookings') {
        const data = await Booking.findOne({ _id: mongoose.Types.ObjectId.createFromHexString(id) });
        return data;
    };
};

export const insetNew = async (collection, newDocument) => {
    if (collection === 'boats') {
        const data = await Boat.create(newDocument);
        return data;
    };
    if (collection === 'bookings') {
        const data = await Booking.create(newDocument);
        return data;
    };
};

export const deleteOneById = async (collection, id) => {
    if (collection === 'boats') {
        const data = await Boat.findOneAndDelete({ _id: mongoose.Types.ObjectId.createFromHexString(id) });
        return data;
    };
    if (collection === 'bookings') {
        const data = await Booking.findOneAndDelete({ _id: mongoose.Types.ObjectId.createFromHexString(id) });
        return data;
    };
};

export const editOne = async (collection, editedDocument) => {
    if (collection === 'boats') {
        const id = editedDocument._id
        delete editedDocument._id
        const data = await Boat.findOneAndReplace({ _id: mongoose.Types.ObjectId.createFromHexString(id) }, editedDocument, {returnDocument: 'after'});
        return data;
    };
    if (collection === 'bookings') {
        const id = editedDocument._id
        delete editedDocument._id
        const data = await Booking.findOneAndReplace({ _id: mongoose.Types.ObjectId.createFromHexString(id) }, editedDocument, {returnDocument: 'after'});
        return data;
    };
};

export const getManyBookings = async (boatId) => {
        const data = await Booking.find({ boatId: boatId });
        return data;
};

