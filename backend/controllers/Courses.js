const Course = require("../models/Course");

const paginate = async (searchTerm = '', page = 1) => {
  try {
    const resultsPerPage = 6;
    const skip = (page - 1) * resultsPerPage;
    const query = searchTerm ? { $text: { $search: searchTerm } } : {};
    const totalCount = await Course.countDocuments(query);
    const totalPages = Math.ceil(totalCount / resultsPerPage);

    if (page < 1 || page > totalPages || totalCount ===0) {
      throw new Error("No courses!");
    }

    const courses = await Course.find(query)                
    .skip(skip)
    .limit(resultsPerPage)
    .exec();
    
    return { totalCount, courses, page, totalPages };
  } catch (error) {
    throw error; 
  }
};

exports.getCourses = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page, 10) || 1;
    const searchTerm = req.query.search || '';
    const result = await paginate(searchTerm, page);
    res.status(200).json({
      status: "success",
      ...result
    });
  } catch (err) {
    next(err); 
  }
};


exports.getOne = async (req, res, next) => {
  try {
    const course = await Course.findById(req.params.courseId);
    if (!course) throw new Error("Could not find any course with the specified id!");
    res.status(200).json({ status: "success", course });

  } catch (error) {
    next(error);
  }
};
