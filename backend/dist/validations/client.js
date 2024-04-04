"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientValidations = void 0;
const express_validator_1 = require("express-validator");
exports.clientValidations = [
    (0, express_validator_1.check)("name")
        .exists()
        .withMessage("Name is required")
        .isString()
        .withMessage("Name should be a string")
        .isLength({ min: 4 })
        .withMessage("Name should be at least 2 characters"),
    (0, express_validator_1.check)("surnname")
        .exists()
        .withMessage("Surname is required")
        .isString()
        .withMessage("Surname should be a string")
        .isLength({ min: 4 })
        .withMessage("Surname should be at least 2 characters"),
    (0, express_validator_1.check)("dni")
        .exists()
        .withMessage("Dni is required")
        .isString()
        .withMessage("Dni should be a number"),
    (0, express_validator_1.check)("birthdate")
        .exists()
        .withMessage("Birthdate is required")
        .isString()
        .withMessage("Birthdate should be a string"),
    (0, express_validator_1.check)("address")
        .exists()
        .withMessage("Address is required")
        .isString()
        .withMessage("Address should be a string"),
    (0, express_validator_1.check)("postalcode")
        .exists()
        .withMessage("Postal Code is required")
        .isString()
        .withMessage("Postal Code should be a string"),
    (0, express_validator_1.check)("email")
        .exists()
        .withMessage("Email is required")
        .isString()
        .withMessage("Email should be a string"),
    (0, express_validator_1.check)("phone")
        .exists()
        .withMessage("Phone is required")
        .isString()
        .withMessage("Phone should be a string")
        .withMessage("Phone should be at least 2 characters")
];
