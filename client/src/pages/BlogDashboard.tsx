import { BlogCard } from "../components/BlogCard";
import { BlogSkeleton } from "../components/BlogSkeleton";
import { Navbar } from "../components/Navbar";
import { useBlogs } from "../hooks";

export const BlogDashboard = () => {
  const { loading, blogs } = useBlogs();

  return (
    <div>
      <Navbar />

      <div className="flex justify-center">
        <div>
          {loading ? (
            <div className="pt-5">
              <BlogSkeleton />
              <BlogSkeleton />
              <BlogSkeleton />
              <BlogSkeleton />
              <BlogSkeleton />
            </div>
          ) : (
            blogs.map((blog) => (
              <BlogCard
                key={blog.id}
                id={blog.id}
                authorName={blog.author.name || "Anonymous"}
                title={blog.title}
                content={blog.content}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};
