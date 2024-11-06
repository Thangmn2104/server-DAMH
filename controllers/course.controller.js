const BaseController = require('./base.controller');
const CourseService = require('../services/course.service');

class CourseController extends BaseController {
    constructor() {
        super(CourseService);  // Inherit from BaseController and pass in the CourseService
    }

    exportUserCSV = async (req, res) => {
        try {
            await CourseService.exportUserCSV(res); // Ensure this handles the response
        } catch (error) {
            if (!res.headersSent) {  // Check if headers were not already sent
                res.status(400).json({ message: error.message });
            }
        }
    }
}

module.exports = new CourseController();
