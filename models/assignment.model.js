// courseSchema.js
const mongoose = require('mongoose');
const { Schema } = mongoose; // Sử dụng Schema từ mongoose


const fileSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: false,
    },
}, {
  timestamps: true, // Automatically adds createdAt and updatedAt fields
});

// const sectionSchema = new Schema({
//     name: {
//         type: String,
//         required: true,
//     },
//     files: {
//         type: [fileSchema],
//         required: false
//     }
// }, {
//   timestamps: true, // Automatically adds createdAt and updatedAt fields
// });



const assignmentSchema = new Schema({
    groupId: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    files: {
        type: [fileSchema],
        require: false
    }
}, {
  timestamps: true, // Automatically adds createdAt and updatedAt fields
});

module.exports = mongoose.model('assignment', assignmentSchema);
