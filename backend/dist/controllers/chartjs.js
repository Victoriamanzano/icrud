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
exports.postChartjs = exports.getChartjs = exports.getChartsjs = void 0;
const express_validator_1 = require("express-validator");
const chartjs_1 = __importDefault(require("../models/chartjs"));
const chartjs_2 = require("../validations/chartjs");
const getChartsjs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listChard = yield chartjs_1.default.findAll();
    res.json(listChard);
});
exports.getChartsjs = getChartsjs;
const getChartjs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const chartjs = yield chartjs_1.default.findByPk(id);
    if (chartjs) {
        res.json(chartjs);
    }
    else {
        res.status(404).json({
            msg: `Oops! ERROR. There is no Chart with the id${id}!`
        });
    }
    ;
});
exports.getChartjs = getChartjs;
exports.postChartjs = [
    ...chartjs_2.chartjsValidations,
    (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { body } = req;
        try {
            yield chartjs_1.default.create(body);
            res.json({
                msg: 'Chart added successfully!',
            });
        }
        catch (error) {
            console.log(error);
            res.json({
                msg: 'Oops! Error adding Chartjs'
            });
        }
    })
];
