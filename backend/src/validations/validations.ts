import { check } from 'express-validator';

export const idValidations = [
    check('id')

    .isInt().withMessage('id must be an integer')
    .custom((value) => {

    const mariadbIdRegex = /^[0-9]+$/;

        if (!mariadbIdRegex.test(value)) {
         throw new Error('Invalid MariaDB id format');
        }
         return true;
   })
]