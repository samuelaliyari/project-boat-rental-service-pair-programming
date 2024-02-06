import { services } from "../services/index.js";
import { status } from "./status.js";

export const getOneBooking = async (req, res) => {
    const bookingId = req.params.bookingId;
    try {
        const booking = await services.getOneById('bookings', bookingId);
        res.status(status.OK).json({
            success: true, result: booking
        });
    } catch (error) {
        res.status(status.INTERNAL_SERVER_ERROR).json({
            success: false, error: error
        });
    };
};