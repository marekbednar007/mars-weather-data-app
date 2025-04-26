"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const api_1 = __importDefault(require("../routes/api"));
dotenv_1.default.config();
const PORT = process.env.PORT || 3000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded());
app.use(express_1.default.static(path_1.default.resolve(__dirname, '../client')));
app.use('/api', api_1.default);
// DEFINE ROUTER HANDLERS HERE
app.get('/', (req, res) => {
    res.status(200).send('API is working.');
});
app.listen(PORT, () => {
    console.log(`Listening to the port: ${PORT}`);
});
