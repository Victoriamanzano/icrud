import { check } from 'express-validator';

export const calendarValidations = [
    check("title")
        .exists()
        .withMessage("Title is required")
        .isString()
        .withMessage("Title should be a string")
        .isLength({ min: 5 })
        .withMessage("Title should be at least 5 characters"),

    check("date")
        .exists()
        .withMessage("Date is required")
        .isDate()
        .withMessage("Date should be a valid date"),

];