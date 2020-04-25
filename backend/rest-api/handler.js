"use strict";

require("dotenv").config({ path: "./.env" });
const Airtable = require("airtable");
const base = new Airtable({ apiKey: process.env.airtableApiKey }).base(
  process.env.airtableId
);
const tableName = "responses";

module.exports.create = async (event) => {
  const data = JSON.parse(event.body);

  const response = {
    state: data.state,
    area: data.area,
    createdAt: new Date().getTime(),
  };

  try {
    await base(tableName).create(response);
    return {
      statusCode: 201,
    };
  } catch (err) {
    return {
      statusCode: err.statusCode,
      body: JSON.stringify(err),
    };
  }
};
