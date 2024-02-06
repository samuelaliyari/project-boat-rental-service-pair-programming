import { services } from "../services/index.js";
import { status } from "./status.js";

export const getAllBoats = async (_, res) => {
    try {
        const allBoats = await services.getAll('boats');
        res.status(status.OK).json({
            success: true, result: allBoats
        });
    } catch (error) {
        res.status(status.INTERNAL_SERVER_ERROR).json({
            success: false, error: error
        });
    };
};