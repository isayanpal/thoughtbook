import { BlogSkeleton } from "../components/BlogSkeleton";
import { FullBlog } from "../components/FullBlog";
import { Navbar } from "../components/Navbar";

import { useBlog } from "../hooks";
import { useParams } from "react-router-dom";

const Blog = () => {
  const { id } = useParams();
  const { loading, blog } = useBlog({
    id: id || "",
  });

  return (
    <div>
      <Navbar />

      <div className="flex justify-center">
        {loading ? (
          <BlogSkeleton />
        ) : blog ? (
          <FullBlog blogDetails={blog} />
        ) : (
          <div>Blog not found</div>
        )}
      </div>
    </div>
  );
};

export default Blog;
