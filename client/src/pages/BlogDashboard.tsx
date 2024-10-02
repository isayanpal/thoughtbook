import { BlogCard } from "../components/BlogCard";
import { Navbar } from "../components/Navbar";
import { useBlogs } from "../hooks";

export const BlogDashboard = () => {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return <div>loading...</div>;
  }
  return (
    <div>
      <Navbar />
      <div className="flex justify-center">
        <div>
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              id={blog.id}
              authorName={blog.author.name || "Anonymous"}
              title={blog.title}
              content={blog.content}
              publishedDate="2nd Oct 2024"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
