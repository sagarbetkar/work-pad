import mongoose from 'mongoose';

const user = new Schema({
  username: String,
  email: String,
  password: String,
  passwordExpiry: String,
  createdAt: Date,
  modifiedAt: Date,
  firstName: String,
  lastName: String,
  facebook: String,
  google: String
});
