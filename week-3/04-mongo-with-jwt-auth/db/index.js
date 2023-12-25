const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

// Access your environment variables
const dbUrl = process.env.DB_URL_MONGOJWT;

// Connect to MongoDB
mongoose.connect(dbUrl);

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String,
    token: String,
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String,
    token: String,
    purchasedCourses: Array,
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    courseId: Number,
    title: String,
    description: String,
    price: Number,
    imageLink: String,
    published: Boolean
    
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}