"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chartjsValidations = void 0;
const express_validator_1 = require("express-validator");
exports.chartjsValidations = [
    (0, express_validator_1.check)("title")
        .exists()
        .withMessage("Title is required")
        .isString()
        .withMessage("Title should be a string")
        .isLength({ min: 5 })
        .withMessage("Title should be at least 5 characters"),
    (0, express_validator_1.check)("data")
        .exists()
        .withMessage("Data is required")
        .isArray()
        .withMessage("Data should be an array"),
    (0, express_validator_1.check)("data.*")
        .isNumeric()
        .withMessage("All data elements should be numbers")
];
