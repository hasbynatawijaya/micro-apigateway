const apiAdapter = require("../../apiAdapter");

const { URL_COURSE_SERVICE, HOST_NAME } = process.env;

const api = apiAdapter(URL_COURSE_SERVICE);

module.exports = async (req, res) => {
  try {
    const lessons = await api.get("/api/lessons", {
      params: {
        ...req.query,
      },
    });

    return res.json(lessons.data);
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
