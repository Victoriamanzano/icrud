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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const client_routes_1 = __importDefault(require("../routes/client.routes"));
const connection_1 = __importDefault(require("../db/connection"));
const chartjs_routes_1 = __importDefault(require("../routes/chartjs.routes"));
const map_routes_1 = __importDefault(require("../routes/map.routes"));
const client_routes_2 = __importDefault(require("../routes/client.routes"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '3000';
        this.listen();
        this.middlewares();
        this.routes();
        this.dbConnect();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Application running on the port ${this.port} ⚡`);
        });
    }
    routes() {
        this.app.get('/', (req, res) => {
            res.json({
                msg: 'API Working'
            });
        });
        this.app.use('/api/clients', client_routes_1.default);
        this.app.use('/api/events', client_routes_2.default);
        this.app.use('/maps', map_routes_1.default);
        this.app.use('/api/chartjs', chartjs_routes_1.default);
    }
    middlewares() {
        this.app.use(express_1.default.json());
        this.app.use((0, cors_1.default)());
    }
    dbConnect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_1.default.authenticate();
                console.log('Connected database (^ ◡ ^ ) yuup!');
            }
            catch (error) {
                console.log(error);
                console.log('Error connecting people!! (  ◡́ .◡̀ )');
            }
        });
    }
}
exports.default = Server;
