import { Link } from "react-router-dom";

interface BlogCardProps {
  id: number;
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
}

export const BlogCard = ({
  id,
  authorName,
  title,
  content,
  publishedDate,
}: BlogCardProps) => {
  return (
    <Link to={`/blog/${id}`}>
      <div className="mt-2 p-3 border-b border-slate-200 pb-4 rounded-lg w-screen max-w-screen-md cursor-pointer">
        <div className="flex">
          <div className="flex flex-col justify-center">
            <Avatar name={authorName} />
          </div>
          <div className="pl-2">{authorName}</div>
          <div className="pl-2 font-thin text-slate-500">{publishedDate}</div>
        </div>
        <div className="text-xl font-bold pt-2">{title}</div>
        <div className="font-normal text-lg">
          {content.slice(0, 100) + "..."}
        </div>
        <div className="text-slate-500 text-sm font-thin pt-2">{`${Math.ceil(
          content.length / 100
        )} minutes read`}</div>
      </div>
    </Link>
  );
};
export function Avatar({ name }: { name: string }) {
  return (
    <div className="relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-gray-100 rounded-full outline outline-1">
      <span className=" text-s text-gray-600 ">{name[0]}</span>
    </div>
  );
}
