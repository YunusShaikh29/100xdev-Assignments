const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

// Access your environment variables
const dbUrl = process.env.DB_URL_MONGOJWT;

// Connect to MongoDB
mongoose.connect(dbUrl);

const UserSchema = new mongoose.Schema({
    email: String,
    password: String,
    id: String,
    hasBusinessCard: Boolean
})

const BusinessCardSchema = new mongoose.Schema({
    name: String,
    description: String, 
    interests: String,
    linkedin: String,
    twitter: String,
    id: String
})


const User = mongoose.model('User', UserSchema);
const BusinessCard = mongoose.model('Business_Card', BusinessCardSchema);

module.exports = {
    User,
    BusinessCard
}