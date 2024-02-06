import { services } from "../services/index.js";
import { status } from "./status.js";

export const editBoat = async (req, res) => {
    const editedBoatObj = req.body;
    try {
        const editedBoat = await services.editOne('boats', editedBoatObj);
        res.status(status.ACCEPTED).json({
            success: true, result: editedBoat
        });
    } catch (error) {
        res.status(status.INTERNAL_SERVER_ERROR).json({
            success: false, error: error
        });
    };
};