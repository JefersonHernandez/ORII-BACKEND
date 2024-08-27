import { Router } from "express";
import { CalendarController } from "../controller/CalendarController";

const router = Router();

router.get("/events/:id", CalendarController.getEvent);
router.put("/events/:id", CalendarController.updateEvent);
router.delete("/events/:id", CalendarController.deleteEvent);
router.post("/events", CalendarController.createEvent);

export default router;
