import { services } from "../services/index.js";
import { status } from "./status.js";

export const editBooking = async (req, res) => {
    const editedBookingObj = req.body;
    try {
        const editedBooking = await services.editOne('bookings', editedBookingObj);
        res.status(status.ACCEPTED).json({
            success: true, result: editedBooking
        });
    } catch (error) {
        res.status(status.INTERNAL_SERVER_ERROR).json({
            success: false, error: error
        });
    };
};