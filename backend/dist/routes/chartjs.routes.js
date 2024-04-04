"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const chartjs_1 = require("../validations/chartjs");
const chartjs_2 = require("../controllers/chartjs");
const routerChartjs = (0, express_1.Router)();
routerChartjs.get('/', chartjs_2.getChartsjs);
routerChartjs.get('/:id', chartjs_2.getChartjs);
routerChartjs.post('/', chartjs_1.chartjsValidations, chartjs_2.postChartjs);
exports.default = routerChartjs;
