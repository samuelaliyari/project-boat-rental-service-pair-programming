import { Router } from "express";
import { controller } from "../controller/index.js";

const bookingsRouter = Router();

bookingsRouter.get('/', controller.getAllBookings);

bookingsRouter.get('/:bookingId', controller.getOneBooking);

bookingsRouter.get('/boat_bookings/:boatId', controller.getAllBookingsByBoatId);

bookingsRouter.delete('/delete/:bookingId', controller.deleteBooking);

bookingsRouter.put('/edit', controller.editBooking);

bookingsRouter.post('/add', controller.addNewBooking);

export default bookingsRouter;