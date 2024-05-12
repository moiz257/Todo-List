"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
let todos = [];
let condition = true;
while (condition) {
    let addTask = await inquirer_1.default.prompt([
        {
            name: "todo",
            message: "WHAT DO YOU WANT TO ADD IN YOUR TODO",
            type: "input"
        },
        {
            name: "addmore",
            message: "DO YOU WANT TO ADD SOMETHING MORE IN YOUR TODO",
            type: "confirm",
            default: true
        }
    ]);
    todos.push(addTask.todo);
    console.log(todos);
    condition = addTask.addmore;
}
