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
exports.updateMap = exports.postMap = exports.deleteMap = exports.getMap = exports.getMaps = exports.getMarkers = void 0;
const map_1 = __importDefault(require("../models/map"));
const getMarkers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const maps = yield map_1.default.findAll();
    res.status(200).json(maps);
});
exports.getMarkers = getMarkers;
const getMaps = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listMaps = yield map_1.default.findAll();
    res.json(listMaps);
});
exports.getMaps = getMaps;
const getMap = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const map = yield map_1.default.findByPk(id);
    if (map) {
        res.json(map);
    }
    else {
        res.status(404).json({
            msg: `Oops! ERROR. There is no Map with the id${id}`
        });
    }
    ;
});
exports.getMap = getMap;
const deleteMap = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const map = yield map_1.default.findByPk(id);
    if (!map) {
        return res.status(404).json({
            msg: `Oops! ERROR. There is no Map with the id ${id}!`
        });
    }
    else {
        yield map.destroy();
        res.json({
            msg: `Map with id ${id} has been successfully deleted!`
        });
    }
});
exports.deleteMap = deleteMap;
const postMap = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield map_1.default.create(body);
        res.json({
            msg: 'Map added successfully!',
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: 'Oops! Error adding Map'
        });
    }
});
exports.postMap = postMap;
const updateMap = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    const map = yield map_1.default.findByPk(id);
    try {
        if (!map) {
            res.status(404).json({
                msg: `Oops! ERROR. There is no Map with the id ${id}`
            });
        }
        else {
            yield map.update(body);
            res.json({
                msg: `The map was successfully updated!`
            });
        }
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: 'Oops! some error occurred, contact support!'
        });
    }
});
exports.updateMap = updateMap;
