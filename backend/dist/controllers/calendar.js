"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateEvent = exports.postEvent = exports.deleteEvent = exports.getEvent = exports.getEvents = void 0;
const express_validator_1 = require("express-validator");
const calendar_validations_1 = require("../validations/calendar-validations");
const calendar_1 = __importDefault(require("../models/calendar"));
const getEvents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listEvents = yield calendar_1.default.findAll();
    res.json(listEvents);
});
exports.getEvents = getEvents;
const getEvent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const event = yield calendar_1.default.findByPk(id);
    if (event) {
        res.json(event);
    }
    else {
        res.status(404).json({
            msg: `There is no event with the id!${id}`
        });
    }
});
exports.getEvent = getEvent;
const deleteEvent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const event = yield calendar_1.default.findByPk(id);
    if (!event) {
        res.status(404).json({
            msg: `There is no event with the id!${id}`
        });
    }
    else {
        yield event.destroy();
        res.json({
            msg: `The client was successfully deleted!`
        });
    }
});
exports.deleteEvent = deleteEvent;
exports.postEvent = [...calendar_validations_1.calendarValidations, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { body } = req;
        try {
            yield calendar_1.default.create(body);
            res.json({
                msg: `The event was added successfully!`
            });
        }
        catch (error) {
            console.log(error);
            res.json({
                msg: `Oops some error occurred, contact support!`
            });
        }
    })
];
exports.updateEvent = [...calendar_validations_1.calendarValidations, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { id } = req.params;
        const { body } = req;
        const event = yield calendar_1.default.findByPk(id);
        try {
            if (!event) {
                res.status(404).json({
                    msg: `There is no event with the id!${id}`
                });
            }
            else {
                yield event.update(body);
                res.json({
                    msg: `The event was successfully updated!`
                });
            }
        }
        catch (error) {
            res.json({
                msg: `Oops some error occurred, contact support!`
            });
        }
    })
];
