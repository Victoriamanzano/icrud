"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.idValidations = void 0;
const express_validator_1 = require("express-validator");
exports.idValidations = [
    (0, express_validator_1.check)('id')
        .isInt().withMessage('id must be an integer')
        .custom((value) => {
        const mariadbIdRegex = /^[0-9]+$/;
        if (!mariadbIdRegex.test(value)) {
            throw new Error('Invalid MariaDB id format');
        }
        return true;
    })
];
