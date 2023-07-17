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
const axios_1 = require("axios");
const node_fetch_1 = __importDefault(require("node-fetch"));
class PaystackBaseApi {
    constructor(uri) {
        this.fetch = (uri, body, args, requestInit) => __awaiter(this, void 0, void 0, function* () {
            try {
                const uriObj = new URL(uri, this.baseUri);
                if (args) {
                    uriObj.search = new URLSearchParams(args).toString();
                }
                const requestOptions = Object.assign(Object.assign({}, requestInit), { body });
                const response = yield (0, node_fetch_1.default)(uriObj.toString(), requestOptions);
                if (!response.ok) {
                    const errorMessage = yield response.text();
                    throw new Error(errorMessage);
                }
                if (response.status === axios_1.HttpStatusCode.NoContent)
                    return;
                return response.json();
            }
            catch (error) {
                console.log(error.message, "errorsss");
                throw new Error(error.message);
            }
        });
        this.get = (uri, args, requestInit) => {
            return this.fetch(uri, undefined, args, Object.assign(Object.assign({}, requestInit), { method: "GET" }));
        };
        this.post = (uri, body, args, requestInit) => {
            const bodyString = body ? JSON.stringify(body) : undefined;
            return this.fetch(uri, bodyString, args, Object.assign(Object.assign({}, requestInit), { method: "POST" }));
        };
        this.baseUri = uri;
    }
}
exports.default = PaystackBaseApi;
