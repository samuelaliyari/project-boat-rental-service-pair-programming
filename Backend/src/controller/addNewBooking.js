import { services } from "../services/index.js";
import { status } from "./status.js";

export const addNewBooking = async (req, res) => {
    const newBookingObj = req.body;
    try {
        const newBooking = await services.insertNew('bookings', newBookingObj);
        res.status(status.CREATED).json({
            success: true, result: newBooking
        });
    } catch (error) {
        res.status(status.INTERNAL_SERVER_ERROR).json({
            success: false, error: error
        });
    };
};