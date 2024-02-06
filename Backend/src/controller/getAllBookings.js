import { services } from "../services/index.js";
import { status } from "./status.js";

export const getAllBookings = async (_, res) => {
    try {
        const allBookings = await services.getAll('bookings');
        res.status(status.OK).json({
            success: true, result: allBookings
        });
    } catch (error) {
        res.status(status.INTERNAL_SERVER_ERROR).json({
            success: false, error: error
        });
    };
};