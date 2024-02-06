import { addNewBoat } from "./addNewBoat.js";
import { addNewBooking } from "./addNewBooking.js";
import { deleteBoat } from "./deleteBoat.js";
import { deleteBooking } from "./deleteBooking.js";
import { editBoat } from "./editBoat.js";
import { editBooking } from "./editBooking.js";
import { getAllBoats } from "./getAllBoats.js";
import { getAllBookings } from "./getAllBookings.js";
import { getAllBookingsByBoatId } from "./getAllBookingsByBoatId.js";
import { getOneBoat } from "./getOneBoat.js";
import { getOneBooking } from "./getOneBooking.js";

export const controller = {
    addNewBoat,
    deleteBoat,
    editBoat,
    getAllBoats,
    getOneBoat,
    addNewBooking,
    getAllBookings,
    getOneBooking,
    deleteBooking,
    editBooking,
    getAllBookingsByBoatId
};