import { check } from "express-validator";

export const clientValidations = [

        check("name")
        .exists()
        .withMessage("Name is required")
        .isString()
        .withMessage("Name should be a string")
        .isLength({ min: 4 })
        .withMessage("Name should be at least 2 characters"),

        check("surnname")
        .exists()
        .withMessage("Surname is required")
        .isString()
        .withMessage("Surname should be a string")
        .isLength({ min: 4 })
        .withMessage("Surname should be at least 2 characters"),
 
        check("dni")
        .exists()
        .withMessage("Dni is required")
        .isString()
        .withMessage("Dni should be a number"),

        check("birthdate")
        .exists()
        .withMessage("Birthdate is required")
        .isString()
        .withMessage("Birthdate should be a string"),

        check("address")
        .exists()
        .withMessage("Address is required")
        .isString()
        .withMessage("Address should be a string"),
        
        check("postalcode")
        .exists()
        .withMessage("Postal Code is required")
        .isString()
        .withMessage("Postal Code should be a string"),
     
        check("email")
        .exists()
        .withMessage("Email is required")
        .isString()
        .withMessage("Email should be a string"),
      
        check("phone")
        .exists()
        .withMessage("Phone is required")
        .isString()
        .withMessage("Phone should be a string")
        .withMessage("Phone should be at least 2 characters")

];