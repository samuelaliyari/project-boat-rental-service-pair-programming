import { services } from "../services/index.js";
import { status } from "./status.js";

export const getAllBookingsByBoatId = async (req, res) => {
    try {
        const boatId = req.params.boatId;
        const allBoatBookings = await services.getAllBookings(boatId);
        res.status(status.OK).json({
            success: true, result: allBoatBookings
        });
    } catch (error) {
        res.status(status.INTERNAL_SERVER_ERROR).json({
            success: false, error: error
        });
    };
};