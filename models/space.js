const mongoose = require('mongoose');

const spaceSchema = new mongoose.Schema({
  name: String,
  slug: String,
  anemities: [String],
  size: Number,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  address:{
    line: String,
    area: String,
    pincode: Number,
    city: String,
    state: String,
    country: String,
    latitude: Number,
    longitude: Number
  },

  timing: {
    monday: {start: Date, end: Date},
    tuesday: {start: Date, end: Date},
    wednesday: {start: Date, end: Date},
    thursday: {start: Date, end: Date},
    friday: {start: Date, end: Date},
    saturday: {start: Date, end: Date},
    sunday: {start: Date, end: Date}
  },

  social: {
    website: String,
    facebook: String,
    twitter: String
  },

  createdAt : { type: Date, default: Date.now},
  modifiedBy: { type: Date, default: Date.now}
});

const Space = mongoose.model('Space', spaceSchema);

module.exports = Space;
