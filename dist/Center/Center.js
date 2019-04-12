"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var native_1 = __importDefault(require("styled-components/native"));
var react_native_1 = require("react-native");
/** Center layout component description */
exports.Center = native_1.default(react_native_1.View)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  ", "\n"], ["\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  ", "\n"])), function (props) { return (props.height ? "height: " + props.height + "px;" : ""); });
var templateObject_1;
