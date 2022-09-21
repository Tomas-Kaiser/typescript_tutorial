import { Router } from "express";
import CreateReminderDto from "../DTOs/create-reminder";
import Reminder from "../models/reminder";

const router = Router();
const remiders: Reminder[] = [];

router.get('/', (req, res) => {
    res.json(remiders);
});

router.post('/', (req, res) => {
    const { title } = req.body as CreateReminderDto;
    const reminder = new Reminder(title);
    remiders.push(reminder);
    res.status(201).json(reminder);
});

export default router;