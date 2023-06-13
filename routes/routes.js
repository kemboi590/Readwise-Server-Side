import {
  getBlogs,
  createBlog,
  getSingleBlog,
  updateBlog,
  deleteBlog,
} from "./../controllers/blogController.js";

const blogs = (app) => {
  app.route("/blogs").get(getBlogs).post(createBlog);

  app.route("/blogs/:id").get(getSingleBlog).put(updateBlog).delete(deleteBlog);
};
export default blogs;
