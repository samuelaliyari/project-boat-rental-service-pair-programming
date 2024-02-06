import { getAllBookings } from "./getAllBookings.js"
import { deleteOneById } from "./deleteOneById.js"
import { editOne } from "./editOne.js"
import { getAll } from "./getAll.js"
import { getOneById } from "./getOneById.js"
import { insertNew } from "./insertNew.js"

export const services = {
    getAll,
    getOneById,
    deleteOneById,
    editOne,
    insertNew,
    getAllBookings

}