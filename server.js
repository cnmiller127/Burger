const sql = require("mysql");
const express = require("express");
const escape = require("escape-html");
const views = require("./views");

const app = express();

const PORT = process.env.PORT || 7520;

