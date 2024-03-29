"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// cria uma rota para localhost:3333
app.get('/ads', (request, response) => {
    return response.json([
        { "id": 1, "name": "Anúncio 1" },
        { "id": 2, "name": "Anúncio 2" },
        { "id": 3, "name": "Anúncio 3" },
    ]);
});
app.listen(3333);
