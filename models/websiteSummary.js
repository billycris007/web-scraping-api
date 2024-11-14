const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const websiteSummarySchema = new Schema(
  {
    url:{
      type: String,
      required: true
    },
    status:{
      type: String,
      required: true
    },
    summary:{
      type: String,
    },
    error_message: {
      type: String,
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('WebsiteSummary', websiteSummarySchema);