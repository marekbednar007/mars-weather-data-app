"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
// import cors from 'cors';
const dotenv_1 = __importDefault(require("dotenv"));
// import router from '../routes/api';
dotenv_1.default.config();
const PORT = process.env.PORT || 3000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
// app.use(cors());
app.use(express_1.default.urlencoded());
app.use(express_1.default.static(path_1.default.resolve(__dirname, '../client')));
// app.use('/api', router);
// DEFINE ROUTER HANDLERS HERE
app.get('/', (req, res) => {
    res.status(200).send('API is working.');
});
app.listen(PORT, () => {
    console.log(`Listening to the port: ${PORT}`);
});
