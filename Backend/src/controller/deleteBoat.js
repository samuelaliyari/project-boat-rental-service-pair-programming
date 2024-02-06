import { services } from "../services/index.js";
import { status } from "./status.js";

export const deleteBoat = async (req, res) => {
    const boatId = req.params.boatId;
    try {
        const deletedBoat = await services.deleteOneById('boats', boatId);
        res.status(status.ACCEPTED).json({
            success: true, result: deletedBoat
        });
    } catch (error) {
        res.status(INTERNAL_SERVER_ERROR).json({
            success: false, error: error
        });
    };
};