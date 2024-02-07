import { Router } from "express";
import { controller } from "../controller/index.js";
import multer from "multer";

const bookingsRouter = Router();

const fileDestination = new URL(
    '../../data/img', import.meta.url
).pathname

console.log(fileDestination)

const storage = multer.diskStorage({
    destination: fileDestination, filename: (_, file, cb) => {
        cb(null, Date.now() + file.originalname)
    }
});

const upload = multer({ storage: storage })

bookingsRouter.get('/', controller.getAllBookings);

bookingsRouter.get('/:bookingId', controller.getOneBooking);

bookingsRouter.get('/boat_bookings/:boatId', controller.getAllBookingsByBoatId);

bookingsRouter.delete('/delete/:bookingId', controller.deleteBooking);

bookingsRouter.put('/edit', upload.none(), controller.editBooking);

bookingsRouter.post('/add', upload.none(), controller.addNewBooking);

export default bookingsRouter;