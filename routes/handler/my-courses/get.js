const apiAdapter = require("../../apiAdapter");

const { URL_COURSE_SERVICE } = process.env;

const api = apiAdapter(URL_COURSE_SERVICE);

module.exports = async (req, res) => {
  try {
    const userId = req.user.data.id;

    const myCourse = await api.get("/api/my-courses", {
      params: {
        user_id: userId,
      },
    });
    return res.json(myCourse.data);
  } catch (error) {
    if (error.code === "ECONNREFUSED") {
      return res.status(500).json({
        status: "error",
        message: "Service unavailable",
      });
    }

    const { status, data } = error.response;
    return res.status(status).json(data);
  }
};
