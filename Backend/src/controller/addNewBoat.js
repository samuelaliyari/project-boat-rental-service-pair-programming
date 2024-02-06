import { services } from "../services/index.js";
import { status } from "./status.js";

export const addNewBoat = async (req, res) => {
    console.log(req.body);
    console.log(req.file);
    const newBoatObj = {
        ...req.body,
        image: req.file.filename
    };
    console.log(newBoatObj)
    try {
        const newBoat = await services.insertNew('boats', newBoatObj);
        res.status(status.CREATED).json({
            success: true, result: newBoat
        });
    } catch (error) {
        console.log(error)
        res.status(status.INTERNAL_SERVER_ERROR).json({
            success: false, error: error
        });
    };
};