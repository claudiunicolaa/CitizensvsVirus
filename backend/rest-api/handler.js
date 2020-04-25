"use strict";

require("dotenv").config({ path: "./.env" });
const Airtable = require("airtable");
const base = new Airtable({ apiKey: process.env.airtableApiKey }).base(
  process.env.airtableId
);
const tableName = "responses";
const openData = "Imported table";

const errBody = (err) => {
  return {
    statusCode: err.statusCode,
    body: JSON.stringify(err),
  };
};

module.exports.create = async (event) => {
  const response = {
    createdAt: new Date().getTime(),
  };

  try {
    const result = await base(tableName).create(response);
    return {
      statusCode: 201,
      body: JSON.stringify({ reference: result.id }),
    };
  } catch (err) {
    return errBody(err);
  }
};

module.exports.add = async (event) => {
  const body = JSON.parse(event.body);

  try {
    const result = await base(tableName).update(body.reference, body.data);
    return {
      statusCode: 200,
      body: JSON.stringify({ reference: result.id }),
    };
  } catch (err) {
    return errBody(err);
  }
};

module.exports.firstCases = async (event) => {
  const country = event.queryStringParameters.country;

  try {
    const results = await base(openData)
      .select({
        maxRecords: 1,
        view: "Grid view",
        filterByFormula: `AND({location} = '${country}', {total_cases} > 0)`,
      })
      .firstPage();

    return {
      statusCode: 200,
      body: JSON.stringify({
        date: results[0].get("date"),
        no_cases: results[0].get("total_cases"),
      }),
    };
  } catch (err) {
    return errBody(err);
  }
};

module.exports.situationNow = async (event) => {
  const country = event.queryStringParameters.country;
  let selectOptions = {
    maxRecords: 1,
    view: "Grid view",
    sort: [{ field: "date", direction: "desc" }],
    filterByFormula: `AND({location} = '${country}', {date} = '${new Date().toJSON().slice(0,10).replace(/-/g,'-')}')`,
  };

  try {
    let results = await base(openData).select(selectOptions).firstPage();

    // search for yestarday if no results for today
    if (results.length == 0) {
      selectOptions.filterByFormula = `AND({location} = '${country}', {date} = '${new Date(Date.now() - 86400000).toJSON().slice(0,10).replace(/-/g,'-')}')`
    }
    results = await base(openData).select(selectOptions).firstPage();

    console.log(results);
    return {
      statusCode: 200,
      body: JSON.stringify({
        date: results[0].get("date"),
        no_cases: results[0].get("total_cases"),
      }),
    };
  } catch (err) {
    return errBody(err);
  }
};
