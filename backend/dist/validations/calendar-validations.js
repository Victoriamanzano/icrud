"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calendarValidations = void 0;
const express_validator_1 = require("express-validator");
exports.calendarValidations = [
    (0, express_validator_1.check)("title")
        .exists()
        .withMessage("Title is required")
        .isString()
        .withMessage("Title should be a string")
        .isLength({ min: 5 })
        .withMessage("Title should be at least 5 characters"),
    (0, express_validator_1.check)("date")
        .exists()
        .withMessage("Date is required")
        .isDate()
        .withMessage("Date should be a valid date"),
];
