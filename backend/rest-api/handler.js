'use strict';

require('dotenv').config({ path: './.env' });
const mongoose = require('mongoose');
const QuestionnaireResponse = require('./model/QuestionnaireResponse');

const mongoString = process.env.mongoString; 

function connect() {
  return mongoose.connect(mongoString, { useNewUrlParser: true, useUnifiedTopology: true })
}

module.exports.create = async event  => {
  const data = JSON.parse(event.body);

  const resp = new QuestionnaireResponse({
    state: data.state,
    area: data.area,
  });

  try {
    const db = await connect();
    const result = await resp.save();
    return {
      statusCode: 201,
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify(err)
    };
  }
};
