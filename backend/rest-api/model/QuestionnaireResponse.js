const mongoose = require('mongoose');

module.exports = model = mongoose.model('QuestionnaireResponse', {
    state: {
        type: String,
        required: true,
    },
    area: {
        type: String,
        required: false,
    },
    educationLevel: {
        type: String,
        required: false,
    },
    ageGroup: {
        type: String,
        required: false,
    },
    q1: {
        type: Number,
        required: false,
    },
    q2: {
        type: Number,
        required: false,
    },
    q3: {
        type: Number,
        required: false,
    },
    q4: {
        type: Number,
        required: false,
    },
    q5: {
        type: Number,
        required: false,
    },
    q6: {
        type: Number,
        required: false,
    },
    q7: {
        type: Number,
        required: false,
    },
    q8: {
        type: Number,
        required: false,
    },
    q9: {
        type: Number,
        required: false,
    },
    q10: {
        type: Number,
        required: false,
    },
    q11: {
        type: Number,
        required: false,
    },
    q12: {
        type: Number,
        required: false,
    },
    q13: {
        type: Number,
        required: false,
    },
    q14: {
        type: Number,
        required: false,
    },
    q15: {
        type: Number,
        required: false,
    },
    q16: {
        type: Number,
        required: false,
    },
    q17: {
        type: String,
        required: false,
    },
    createdAt: {
        type: Date,
        required: false,
    }
});