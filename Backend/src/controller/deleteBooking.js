import { services } from "../services/index.js";
import { status } from "./status.js";

export const deleteBooking = async (req, res) => {
    const bookingId = req.params.bookingId;
    try {
        const deletedBooking = await services.deleteOneById('bookings', bookingId);
        res.status(status.ACCEPTED).json({
            success: true, result: deletedBooking
        });
    } catch (error) {
        res.status(status.INTERNAL_SERVER_ERROR).json({
            success: false, error: error
        });
    };
};